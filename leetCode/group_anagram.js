/**
 * Given an array of strings, group anagrams together.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strMap = {};
    strs.forEach(str => {
        const sortedStr = str.split('').sort();
        strMap[sortedStr] = strMap[sortedStr] || [];
        strMap[sortedStr].push(str);
    });
    
    return Object.values(strMap);
};

const assert = require('assert');
assert.deepEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["ate","eat","tea"],["nat","tan"],["bat"]]);