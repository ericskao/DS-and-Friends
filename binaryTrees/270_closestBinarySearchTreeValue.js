// 270. Closest Binary Search Tree Value
// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

// Example 1:
// Input: root = [4,2,5,1,3], target = 3.714286
// Output: 4

// Example 2:
// Input: root = [1], target = 4.428571
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// 0 <= Node.val <= 109
// -109 <= target <= 109

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
 * @param {number} target
 * @return {number}
 */

const closestValue = (root, target) => {
    let closest = root.val
    const dfs = (node) => {
        // keep going to closer distance
        while(node){
            let parentDiff = Math.abs(node.val - target) // 1
            if(parentDiff < Math.abs(closest - target)){
                closest = node.val
            }
            // go towards target value, either it is in left or right
            if(target === node.val) break
            if(target < node.val){ // if target is less than parent value, we can never get closer to target by going right
                node = node.left
            } else {
                node = node.right
            }
        }
    }
    dfs(root)
    return closest
}


 // time: o(H) where H is height of tree, average is o(log n), best case o(1), and worst case o(N) where all one line nodes
 // space: o(1)
var closestValue2 = function(root, target) {
    let closest = Infinity
    let stack = [root]
    while(stack.length > 0){
        let popped = stack.pop()
        if(popped.left && popped.val - target > 0){ // 8 - 5 > 0
            // current val is too large, go left
            stack.push(popped.left)
        }
        if(popped.right && popped.val - target < 0){ // 2 - 5 < 0
            // current val is too small, go right
            stack.push(popped.right)
        }
        // if difference between popped and target is less, it is new closest
        if(Math.abs(popped.val - target) < Math.abs(closest - target)){
            closest = popped.val
        }
    }
    return closest
};