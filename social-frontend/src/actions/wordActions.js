export function getWord(word, index) {
    var words = { word, index };
    return {
        type: 'WORD',
        payload: words
    };
}
