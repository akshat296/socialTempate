import { WORD } from '../constants/actionTypes';
export function getWord(word, index) {
    var words = { word, index };
    return {
        type: WORD,
        payload: words
    };
}
