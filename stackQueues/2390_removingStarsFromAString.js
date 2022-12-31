// 2390. Removing Stars From a String
// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

// Input: s = "leet**cod*e"
// Output: "lecoe"

/**
 * @param {string} s
 * @return {string}
 */

 // two pointer method
 // time: o(n)
 // space: o(1)
const removeStars = (s) => {
    s = s.split('')
    let pointer = 0
    for(let i = 0; i<s.length; i++){
        if(s[i] === '*'){
            pointer--
        } else {
            s[pointer] = s[i]
            pointer++
        }
    }
    return s.slice(0,pointer).join('')
}

// stack method
// time: o(n)
// space: o(n)
var removeStarsStack = function(s) {
    let stack = []
    for(let i = 0; i<s.length; i++){
        if(s[i] === '*' && stack.length){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};
