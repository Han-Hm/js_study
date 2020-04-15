/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let node = head;
    const nodeArr = [node];
    while (node.next) {
        node = node.next;
        nodeArr.push(node);
    }
    return nodeArr[Math.trunc(nodeArr.length / 2)];
};