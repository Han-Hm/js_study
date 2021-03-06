/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curProfit = 0;
    let maxProfit = 0;
    let buyPrice = prices[0];
    //[2,1,2,0,1]
    for (let i = 1; i < prices.length; i++) {
        const profit = buyPrice - prices[i];
        if (profit < 0 && curProfit < Math.abs(profit)) {
            curProfit = Math.abs(profit);
        } else {
            buyPrice = prices[i];
            maxProfit += curProfit;
            curProfit = 0;
        }
    }
    if (curProfit > 0) {
        maxProfit += curProfit;
    }
    
    return maxProfit;
};

const assert = require('assert');
assert.equal(maxProfit([7,1,5,3,6,4]), 7);
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
assert.equal(maxProfit([1,2,3,4,5]), 4);
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
assert.equal(maxProfit([7,6,4,3,1]), 0);
// Explanation: In this case, no transaction is done, i.e. max profit = 0.