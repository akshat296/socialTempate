/* PreReqs - Run these before starting Recording
For recording, run with --record parameter
npm install sync-request@4.1.0 websocket@1.0.23 flatten-source-map@0.0.2 && mkdir -p logs 
*/

var PACKAGER = 'localhost:3000'; //CHANGE this to where the package is running
var vm = require('vm');
var url = require('url');
var path = require('path');
var fs = require('fs');

var request = require('sync-request'); // sync-request@4.1.0
var WebSocket = require('websocket').w3cwebsocket; //websocket@1.0.23
var flattenSourceMap = require('flatten-source-map'); //flatten-source-map@0.0.2

function importScripts(scriptUrlStr, cb) {
    var scriptUrl = url.parse(scriptUrlStr);
    console.log('Fetching script from ', scriptUrl.href);

    var response = request('GET', scriptUrl.href);
    var scriptBody = response.getBody('utf-8');
    var sourceMapUrl = sourceMapUtil.getSourceMapURL(scriptUrl, scriptBody);

    console.log('Fetching SourceMaps from ', sourceMapUrl.href);
    var resp = request('GET', sourceMapUrl.href);
    var sourceMapBody = resp.getBody('utf-8');
    scriptBody = sourceMapUtil.updateScriptPaths(scriptBody, sourceMapUrl);
    sourceMapBody = sourceMapUtil.updateSourceMapFile(sourceMapBody, scriptUrl);

    fs.writeFileSync(path.join(__dirname, path.basename(scriptUrl.pathname)), scriptBody);
    fs.writeFileSync(path.join(__dirname, path.basename(sourceMapUrl.pathname)), sourceMapBody);
    try {
        console.log('Injecting Script   at ', path.join(__dirname, scriptUrl.pathname));
        vm.runInThisContext(scriptBody, {
            filename: path.join(__dirname, path.basename(scriptUrl.pathname))
        });
    }
    catch (e) {
        console.log(e);
    }
    finally {
        cb();
    }
}

(function start() {
    console.log('trying to start debugger');
    var ws = new WebSocket('ws://' + PACKAGER + '/debugger-proxy?role=debugger&name=Custom');
    ws.onclose = function () { setTimeout(start, 10000) };
    ws.onopen = function () { console.log('Connection established'); };
    ws.onmessage = function (e) {
        var message = JSON.parse(e.data);
        if (message.$event === 'client-disconnected' || message.method === '$disconnected') {
            console.log('Client disconnected, quitting');
            process.exit(0);
        }

        // Quitting if App goes in background
        if (message.arguments && message.arguments.length === 3 && message.arguments[2].length === 2 && typeof message.arguments[2][1] === 'object' && message.arguments[2][1].app_state === "background") {
            console.log('Client went to background, quitting');
            process.exit(0);
        }

        if (!message.method) {
            return;
        }

        //console.log(message.id, 'Command', JSON.stringify(message));
        var sendReply = function (result) {
            //console.log(message.id, 'RESULT', JSON.stringify(result));
            ws.send(JSON.stringify({ replyID: message.id, result: result, error: null }));
        };
        switch (message.method) {
            case 'prepareJSRuntime':
                sendReply();
                break;
            case 'executeApplicationScript':
                for (var key in message.inject) {
                    global[key] = JSON.parse(message.inject[key]);
                }
                message.url = message.url.replace('localhost:8081', PACKAGER);
                importScripts(message.url, function () { sendReply() });
                break;
            case 'setDebuggerVisibility':
                break;
            default:
                var returnValue = [[], [], [], 0];
                if (typeof __fbBatchedBridge === 'object') {
                    try {
                        returnValue = __fbBatchedBridge[message.method].apply(null, message.arguments);
                    } catch (e) {

                    } finally {
                        sendReply(JSON.stringify(returnValue));
                    }
                }
        }
    }
}());


// Needed to make sourcemaps work with VSCode
var sourceMapUtil = {
    SourceMapURLRegex: /\/\/(#|@) sourceMappingURL=(.+?)\s*$/m,
    getSourceMapURL: function (scriptUrl, scriptBody) {
        var sourceMappingRelativeUrl = scriptBody.match(this.SourceMapURLRegex); // sourceMappingRelativeUrl = "/index.ios.map?platform=ios&dev=true"
        if (sourceMappingRelativeUrl) {
            var sourceMappingUrl = url.parse(sourceMappingRelativeUrl[2]);
            sourceMappingUrl.protocol = scriptUrl.protocol;
            sourceMappingUrl.host = scriptUrl.host;
            return url.parse(url.format(sourceMappingUrl)); // parse() repopulates all the properties of the URL
        }
        return null;
    },
    updateScriptPaths: function (scriptBody, sourceMapUrl) {
        return scriptBody
            .replace(/GLOBAL/g, '__XX__')
            .replace(this.SourceMapURLRegex, "//# sourceMappingURL=" + path.basename(sourceMapUrl.pathname));
    },
    updateSourceMapFile: function (sourceMapBody, scriptUrl) {
        var sourcesRootPath = __dirname;
        var sourceMap = JSON.parse(sourceMapBody);
        if (sourceMap.sections) {
            sourceMap.sections = sourceMap.sections.filter(function (value, index, array) {
                return value.map != null;
            });
            sourceMap = flattenSourceMap(sourceMap);
        }

        if (sourceMap.sources) {
            sourceMap.sources = sourceMap.sources.map(function (sourcePath) {
                return path.posix.join.apply(null, path.relative(sourcesRootPath, sourcePath).split(path.sep));
            });
        }

        delete sourceMap.sourcesContent;
        sourceMap.sourceRoot = "";
        sourceMap.file = path.basename(scriptUrl.pathname);
        return JSON.stringify(sourceMap);
    }
}

process.on('exit', function () {
    if (typeof emitTTDLog === 'function') {
        console.log('Writing time travel logs to ', path.join(__dirname, 'logs'));
        emitTTDLog(path.join(__dirname, 'logs'));
        console.log("====== All DONE =======");
    }
});