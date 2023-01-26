// 103. Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

// time: o(n)
// space: o(n)
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let output = []
    let zig = true
    // get the levels first
    let queue = [[root]]
    while(queue.length > 0){
        let popped = queue.shift()
        let nextLevel = []
        if(zig){
            output.push([...popped].map(el => el.val))
        } else {
            output.push([...popped].reverse().map(el => el.val))
        }
        for(let i = 0; i<popped.length; i++){
            if(popped[i].left){
                nextLevel.push(popped[i].left)
            }
            if(popped[i].right){
                nextLevel.push(popped[i].right)
            }
        }
        if(nextLevel.length > 0){
            queue.push(nextLevel)
            zig = !zig
        }
    }
    return output
};