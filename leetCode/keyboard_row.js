// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const firstRow = 'Q|W|E|R|T|Y|U|I|O|P';
    const secondRow = 'A|S|D|F|G|H|J|K|L';
    const thirdRow = 'Z|X|C|V|B|N|M';

    const withoutFirstRow = new RegExp(secondRow + '|' + thirdRow, 'i');
    const withoutSecondRow = new RegExp(firstRow + '|' + thirdRow, 'i');
    const withoutThirdRow = new RegExp(firstRow + '|' + secondRow, 'i');

    getRegExp = (alphabet) => {
        if (!withoutFirstRow.test(alphabet)) {
            return withoutFirstRow;
        } else if (!withoutSecondRow.test(alphabet)) {
            return withoutSecondRow;
        } else {
            return withoutThirdRow;
        }
    }

    return words.filter((word) => {
        return !getRegExp(word[0]).test(word);
    });
};