// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

// time: o(n), visit each tree once
// space: worst case is unbalanced (only left children), then the recursion calls would call N times (height of tree) then time would be o(n), best case balanced tree (height would be log N), then space would be o(log N)
const maxDepth = (root) => {
  if(!root){
    // reached bottom of children
    return 0
  }
  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))
}