// 74. Search a 2D Matrix
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// time: o(log m*n)
// space: o(1)
var searchMatrix = function(matrix, target) {
    // need to keep track of row in matrix we are checking
    let up = 0
    let down = matrix.length-1
    // get mid of matrix height
    while(up <= down){
        let midRow = Math.floor((down+up)/2)
        let rowEnd = matrix[midRow].length-1
        // check beginning and end of row
        if(target >= matrix[midRow][0] && target <= matrix[midRow][rowEnd]){
            // target can only be in this row, begin search with left and right
            let left = 0;
            let right = matrix[midRow].length-1
            while(left <= right){
                let mid = Math.floor((left+right)/2)
                if(matrix[midRow][mid] === target){
                    return true
                } else if(matrix[midRow][mid] > target){
                    right = mid-1
                } else {
                    left = mid+1
                }
            }
            return false
        } else if(target < matrix[midRow][0]){ // target is less than first el in row
            // target can only be in upper bounds
            down = midRow-1
        } else {
            up = midRow+1
        }
    }
    return false
};
