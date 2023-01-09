// 702. Search in a Sorted Array of Unknown Size
// This is an interactive problem.

// You have a sorted array of unique elements and an unknown size. You do not have an access to the array but you can use the ArrayReader interface to access it. You can call ArrayReader.get(i) that:

// returns the value at the ith index (0-indexed) of the secret array (i.e., secret[i]), or
// returns 231 - 1 if the i is out of the boundary of the array.
// You are also given an integer target.

// Return the index k of the hidden array where secret[k] == target or return -1 otherwise.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: secret = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in secret and its index is 4.
// Example 2:

// Input: secret = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in secret so return -1.


// Constraints:

// 1 <= secret.length <= 104
// -104 <= secret[i], target <= 104
// secret is sorted in a strictly increasing order.
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */

// time: o(log n)
// space: o(1)
var search = function (reader, target) {
    let outOfBoundsValue = 2147483647
    let left = 0
    let right = 1
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        let midOutput = reader.get(mid)
        if(midOutput === outOfBoundsValue || target < midOutput){
            // move right to mid immediately, target can only be left of mid
            right = mid - 1
            continue
        }
        if(target === midOutput){ // found target, return index
            return mid
        }
        if(target > midOutput){  // search right of mid
            left = mid + 1
            if(reader.get(right) < outOfBoundsValue){ // expand right if right is not out of bounds
                right = right * 2
            }
        }
    }
    return -1
};