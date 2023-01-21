// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

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
// space: o(n)
var minDepth = function(root) {
    if(!root) return 0
    let minDepth = Infinity
    const dfs = (node, depth) => {
        if(!node.left && !node.right){
            // we have reached the bottom
            minDepth = Math.min(minDepth, depth+1)
        }
        if(node.left){
            dfs(node.left, depth+1)
        }
        if(node.right){
            dfs(node.right, depth+1)
        }
    }
    dfs(root, 0)
    return minDepth
};