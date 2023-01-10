// 50. Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// -104 <= xn <= 104


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// time: o(log n), cutting it down in half each time
// space: o(log n), recursing and adding to each call stack each call
const myPow = (x, n) => {
  if(n === 1) return x
  if(n === 0) return 1
  if(n < 0){
    return 1 / (myPow(x, -n))
  }
  if(n % 2 === 0){
    const half = myPow(x, n/2)
    return half * half
  }
  return x * myPow(x, n-1)
}

// time: o(log 2 n) => o(log(n) * log(n))
// space: o(log 2 n) => o(log(n) * log(n))
const power = (base, exponent) => {
    if(exponent === 0) return 1
    const half = power(base, parseInt(exponent/2))
    if(exponent % 2 === 0) return half * half
    return base * half * half
}

var myPowB = function(x, n) {
    if(n < 0){
        return 1 / power(x, -n)
    }
    return power(x, n)
};