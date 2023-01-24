// 515. Find Largest Value in Each Tree Row

// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]

// Example 2:
// Input: root = [1,2,3]
// Output: [1,3]

// Constraints:
// The number of nodes in the tree will be in the range [0, 104].
// -231 <= Node.val <= 231 - 1

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
 * @return {number[]}
 */

// time: o(n)
// space: o(n)
var largestValues = function(root) {
    let queue = [root]
    let levelBreadth = root ? 1 : 0
    let output = []
    while(levelBreadth > 0){
      let largestValue = -Infinity
      let count = 0
      for(let i = 0; i<levelBreadth; i++){
        let tree = queue.shift()
        largestValue = Math.max(largestValue, tree.val)
        if(tree.left){
          queue.push(tree.left)
          count++
        }
        if(tree.right){
          queue.push(tree.right)
          count++
        }
      }
      output.push(largestValue)
      levelBreadth = count
    }
    return output
};