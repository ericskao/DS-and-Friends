// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b


// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]


// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104
// arr = [1,2,3,4,5], k = 4, x = 3
var findClosestElements = function(arr, k, x) {
    let left = 0
    let right = arr.length - k // start with window of all possible starting indexes
    while(left < right){
        // keep comparing starting values of windows with the right most possible (that we have not eliminated yet)
        let mid = Math.floor((left + right) / 2)
        if(x - arr[mid] > arr[mid+k] - x){ // if this mid value is larger than mid index+k value, we don't need this left starting value ever again (right starting value is closer to x), could also get stuck on loop
            left = mid + 1
        } else {
            // right's difference is greater than left's difference, move right closer to mid
            // we can only eliminate up to right (not element before right), because valid window can never include right element
            right = mid
        }
    }
    return arr.slice(left, left+k)
};

