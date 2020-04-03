/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const temp = {}
    nums.forEach(n => {
        temp[n] = !temp[n];
    });
    
    let singleNum = 0;
    for (let key in temp) {
        if (temp[key] === true) {
            singleNum = parseInt(key);
            break;
        }
    }
    
    return singleNum;
};

const assert = require('assert');
assert.equal(singleNumber([2,2,1]), 1);
assert.equal(singleNumber([4,1,2,1,2]), 4);