// 154. Find Minimum in Rotated Sorted Array II
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// You must decrease the overall operation steps as much as possible.



// Example 1:

// Input: nums = [1,3,5]
// Output: 1
// Example 2:

// Input: nums = [2,2,2,0,1]
// Output: 0


// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// nums is sorted and rotated between 1 and n times.


/**
 * @param {number[]} nums
 * @return {number}
 */

// time: o(log 2 N) where N is the length of array, worst case scenario there are many duplicates, which leads to o(N)
// space: o(1)
const findMin = (nums) => {
    let left = 0
    let right = nums.length-1
    // on each iteration, check both sides to see which one is sorted, go opposite direction
    while(left<right){
        let mid = Math.floor((left+right)/2)
        // don't have to compare mid and left to be the same because there will be cases where left and mid are the same element (mid can never be right)
        if(nums[mid] === nums[right]){
            // found duplicates, decrease search boundary by just one, there may be a pivot dip between mid and right
            right--
        }
        // check to see if right half is sorted
        else if(nums[mid] < nums[right]){
            // right half is sorted, min el is not in right half (don't set right past mid since mid could be min element still)
            right = mid
        } else {
            // left half is sorted, so go right, set left past mid because mid is largest el
            left = mid + 1
        }
    }
    return nums[left]
}