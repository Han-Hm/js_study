/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const result = [];
    let zeroCount = 0;
    for (let i = 0, end = nums.length; i < end; i++) {
        if (!nums[i]) {
            nums.splice(i, 1);
            i--;
            end--;
            nums.push(0);
        }
    }
};
