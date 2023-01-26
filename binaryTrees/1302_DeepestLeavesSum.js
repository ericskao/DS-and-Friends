1302. Deepest Leaves Sum

Given the root of a binary tree, return the sum of values of its deepest leaves.

Example 1:
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19

Constraints:
The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// time: o(n)
// space: o(h)
var deepestLeavesSum = function(root) {
    if(!root) return 0
    // get the levels first
    let queue = [[root]]
    while(queue.length > 0){
        let popped = queue.shift()
        let nextLevel = []
        let sum = 0
        for(let i = 0; i<popped.length; i++){
            sum += popped[i].val
            if(popped[i].left){
                nextLevel.push(popped[i].left)
            }
            if(popped[i].right){
                nextLevel.push(popped[i].right)
            }
        }
        if(nextLevel.length > 0){
            queue.push(nextLevel)
        } else {
            return sum
        }
    }
};