// 287. Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.



// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3


// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.


// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */

// binary search
// need to sort array in JS because there are no functions that make it monotonic arr
// time: o(n log n), we use binary search, but each time we have to linear scan to get count
// space: o(1)
var findDuplicate = function(nums) {
    // sort nums
    nums = nums.sort((a,b) => a-b)
    let left = 0
    let right = nums.length - 1
    while(left < right){
        let mid = Math.floor((left+right)/2)
        // if distinct array (no duplicates), mid+1 should be nums[mid]
        if(mid + 1 === nums[mid]){
            // number matches correctly with index, duplicate is to the right
            left = mid + 1
        } else {
            // go left, but don't move past mid
            right = mid
        }
    }
    return nums[left]
};