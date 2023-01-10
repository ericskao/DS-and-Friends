// 744. Find Smallest Letter Greater Than Target
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].


// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// time: o(log N), where N is length of letters, we only look at log N elements in array
// space: o(1) only maintain pointers
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length - 1
    // find target
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(letters[mid] > target){
            right = mid - 1
        } else { // if target is found or mid letter is too small, keep searching right
            // keep searching right even if target is found because there may be multiple targets
            left = mid + 1
        }
    }
    // if target is not found, return first letter
    return letters[left] || letters[0]
};