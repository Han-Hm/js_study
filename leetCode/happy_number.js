/**
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: 
 * Starting with any positive integer, replace the number by the sum of the squares of its digits, 
 * and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
 * Those numbers for which this process ends in 1 are happy numbers.
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let temp = n;
    let isStop = false;
    let history = [];
    while (!isStop) {
        history.push(temp);
        temp = sumOfPow(temp);
        isStop = temp === 1 || history.includes(temp);
    } 
    
    return temp === 1;
};

let sumOfPow = (n) => {
    let sNum = n.toString();
    
    let result = 0;
    for (let i = 0; i < sNum.length; i++) {
        result += Math.pow(parseInt(sNum[i]), 2);
    }
    
    return result;
}

const assert = require('assert');
assert(isHappy(19), true);
assert(isHappy(7), true)