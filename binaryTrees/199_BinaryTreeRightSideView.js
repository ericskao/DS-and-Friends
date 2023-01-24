// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:
// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

var rightSideView = function(root) {
    let queue = [root]
    let levelBreadth = root ? 1 : 0
    let output = []
    while(levelBreadth > 0){
      let rightMostNode = null
      let count = 0
      for(let i = 0; i<levelBreadth; i++){
        let tree = queue.shift()
        rightMostNode = tree.val
        if(tree.left){
          queue.push(tree.left)
          count++
        }
        if(tree.right){
          queue.push(tree.right)
          count++
        }
      }
      output.push(rightMostNode)
      levelBreadth = count
    }
    return output
};