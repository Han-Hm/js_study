/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let min = x;
    if (this.minStack.length > 0) {
        min = Math.min(min, this.minStack[this.minStack.length - 1].min);
    }
    this.minStack.push({x, min});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minStack[this.minStack.length - 1].x;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.minStack[this.minStack.length - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const assert = require('assert');
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
assert.equal(minStack.getMin(), -3); // return -3
minStack.pop();
assert.equal(minStack.top(), 0);    // return 0
assert.equal(minStack.getMin(), -2); // return -2