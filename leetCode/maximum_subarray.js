/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, curSum);
    }
    
    return maxSum;
};

const assert = require('assert');
assert.equal(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
assert.equal(maxSubArray([-1]), -1);