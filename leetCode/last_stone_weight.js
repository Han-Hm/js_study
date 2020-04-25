/**
 * We have a collection of stones, each stone has a positive integer weight.
 * Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let sortedStone = stones.sort((a, b) => b - a);
    while (sortedStone.length > 1) {
        let temp = sortedStone[0] - sortedStone[1];
        sortedStone.splice(0, 2);
        if (temp !== 0) {
            sortedStone.push(temp);
            sortedStone = sortedStone.sort((a, b) => b - a);
        }
    }
    
    return sortedStone[0] || 0;
};

const assert = require('assert');
assert.equal(lastStoneWeight([2,7,4,1,8,1]), 1);
assert.equal(lastStoneWeight([2,2]), 0);