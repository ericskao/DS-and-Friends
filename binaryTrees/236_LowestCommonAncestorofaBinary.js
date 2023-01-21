// 236. Lowest Common Ancestor of a Binary Tree

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Example 3:
// Input: root = [1,2], p = 1, q = 2
// Output: 1


// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the tree.

var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
        if(!node) return false
        // if this value matches p or q, return the node
        if(node === p || node === q){
            // this will handle node being descendant of itself because we know that p and q always exist, and that means either q is in this subtree OR that q exists in another parent-subtree
            return node
        }
        let left = dfs(node.left)
        let right = dfs(node.right)
        if(left && right){ // p and q are in both subtrees
            return node
        }
        return left || right // p OR q is in one subtree (returns node) OR will return false if in neither left or right (false will be returned from null children)
    }
    return dfs(root)
};

const lowestCommonAncestor = (root, p, q) => {
  // want to check if any of children are p or q
  const dfs = (node) => {
    if(!node) return false
    if(node.val === p || node.val === q){
      return true
    }
    let left = dfs(node.left)
    let right = dfs(node.right)
    if(left && right){
      return node
    } else if((left || right) && (node === p || node === q)){
      return node
    }
  }
  return dfs(root)
}