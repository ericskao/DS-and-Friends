// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105

let getMinimumDifference = (root) => {
    // in order traversal will go to the left most, then right most of subtree before back to parent
    // use in-order traversal, left, then root, then right
    let prev = Infinity
    let min = null

    const dfs = (node) => {
        if(!node) return null
        // keep DFS left
        dfs(node.left)
        // after left dfs has returned, handle current node before going right
        if(prev === Infinity){
            min = Infinity
        } else {
            min = Math.min(min, node.val - prev)
        }
        prev = node.val
        dfs(node.right)
    }

    dfs(root)
    return min
}


let getMinimumDifference2 = function(root) {
    let min = Infinity
    // at each level, return the highest from left subtree, and lowest from the right subtree
    // find diff between parent and left, and diff between parent and right
    // run dfs on children

    const getLowest = (node) => {
        // starting from node, look for lowest
        if(!node) return null
        if(node.left){
            return getLowest(node.left)
        }
        // else return current val
        return node.val
    }

    const getHighest = (node, highestSoFar) => {
        if(!node) return null
        // keep going right if possible, else return current val
        if(node.right){
            return getHighest(node.right)
        }
        // else return current val
        return node.val
    }

    const dfs = (node) => {
        if(!node) return null
        let highestLeft = getHighest(node.left);
        let lowestRight = getLowest(node.right);
        if(highestLeft && node.val - highestLeft < min){
            min = node.val - highestLeft
        }
        if(lowestRight && lowestRight - node.val < min){
            min = lowestRight - node.val
        }
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return min
};