/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const sortedStone = stones.sort((a, b) => b - a));
    let temp = sortedStone[0] - sortedStone[1];
    for (let i = 1; i < sortedStone.length - 1; i++) {
        sortedStone
    }
};