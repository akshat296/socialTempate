const devConfig    = require('./webpack/webpack.dev');
const prodConfig   = require('./webpack/webpack.prod');
const commonConfig = require('./webpack/webpack.common');

module.exports = process.env.NODE_ENV === 'production' ? devConfig : prodConfig;
