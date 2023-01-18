// 394. Decode String

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"


// Constraints:
// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

// time: o(n) where n is size of str
// space: o(n) where n is length of n
const decodeString = (s) => { // "2[abc]3[cd]ef"
  let n = ''
  let str = ''
  let stack = []
  for(let i = 0; i<s.length; i++){
    if(s[i] === '['){
      // push tuple into stack with built str and n
      stack.push([str, n])
      n = ''
      str = ''
    } else if(s[i] === ']'){
      // do pop tuple logic, n becomes 1 again
      let [subStr, num] = stack.pop()
      str = subStr + (str.repeat(parseInt(num)))
    } else if(s[i]<= '9' && s[i] >= '0'){
      // update n
      n += s[i]
    } else {
      // update str
      str += s[i]
    }
  }
  return str
}