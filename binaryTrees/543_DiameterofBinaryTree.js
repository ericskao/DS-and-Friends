// 543. Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

// time: o(n), has to go through each node
// space: o(n) call stacks
var diameterOfBinaryTree = function(root) {
    let max = 0
    const dfs = (node, depth) => {
        if(!node) return 0
        const left = dfs(node.left)
        const right = dfs(node.right)
        // could be that at this subtree level, its left + right is longer than from the root
        if(left+right > max){
            max = left+right
        }
        // return + 1 to get back to root level
        return 1 + Math.max(left, right)
    }
    dfs(root)
    return max
};
