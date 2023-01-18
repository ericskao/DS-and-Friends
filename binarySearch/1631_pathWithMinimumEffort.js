// 1631. Path With Minimum Effort

// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

// Example 1:
// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

// Example 2:
// Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
// Output: 1
// Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].

// Example 3:
// Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// Output: 0
// Explanation: This route does not require any effort.


// Constraints:
// rows == heights.length
// columns == heights[i].length
// 1 <= rows, columns <= 100
// 1 <= heights[i][j] <= 106


// time: Binary Search: O(log k) where k is max element in array, BFS search: O(m * n)
// space: O(m * n)
let DIRECTIONS = [[1,0],[-1,0],[0,1],[0,-1]]

const canReachDestination = (heights, target, endRow, endCol) => {
    // create visited matrix array to see if we have been to this spot before
    let visited = Array(endRow).fill().map(()=>Array(endCol).fill())
    let queue = [[0,0]]
    let currentDiff = null
    while(queue.length > 0){
        let [row,col] = queue.pop()
        if(row === endRow-1 && col === endCol-1){
            return true
        }
        // add position to visited
        visited[row][col] = true
        for(let i = 0; i<DIRECTIONS.length; i++){
            let [dx,dy] = DIRECTIONS[i]
            let newRow = row+dx
            let newCol = col+dy
            // check if in bounds and not visited before
            if(newRow >= 0 && newRow < endRow && newCol >= 0 && newCol < endCol && !visited[newRow][newCol]){
                currentDiff = Math.abs(heights[row][col] - heights[newRow][newCol])
                if(currentDiff <= target){
                    queue.push([newRow, newCol])
                }
            }
        }
    }
}


var minimumEffortPath = function(heights) {
    // define search boundaries
    let left = 0
    let right = 1000000
    while(left<right){
        // search if there is a path that satisfies mid effort
        let mid = Math.floor((left+right)/2)
        // bfs for paths here, starting from (0,0)
        if(canReachDestination(heights, mid, heights.length, heights[0].length)){
            // satisfies condition, look for more efficient, go left
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};

