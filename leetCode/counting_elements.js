/**
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 * If there're duplicates in arr, count them seperately.
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const set = {};
    arr.forEach(n => {
        set[n] = true;
    });
    
    let count = 0;
    arr.forEach(n => {
        if (set[n + 1]) {
            count++;
        }
    });
    
    return count;
};

const assert = require('assert');
assert.equal(countElements([1,2,3]), 2);
assert.equal(countElements([1,1,3,3,5,5,7,7]), 0);
assert.equal(countElements([1,3,2,3,5,0]), 3);
assert.equal(countElements([1,1,2,2]), 2);
assert.equal(countElements([1,1,2]), 2);