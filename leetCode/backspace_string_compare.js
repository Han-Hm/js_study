/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return getCompare(S) === getCompare(T)
};

var getCompare = (str) => {
    const strArr = [];
    let idx = 0; 
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c === '#') {
            idx = idx === 0 ? 0 : idx - 1;
            strArr[idx] = '';
            continue;
        }
        strArr[idx++] = c;
    }
    
    return strArr.join('');
}

const assert = require('assert');
assert.equal(backspaceCompare("ab#c", "ad#c"), true);
assert.equal(backspaceCompare("ab##", "c#d#"), true);
assert.equal(backspaceCompare("a##c", "#a#c"), true);
assert.equal(backspaceCompare("a#c", "b"), false);