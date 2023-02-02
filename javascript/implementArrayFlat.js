// 3. implement Array.prototype.flat()

// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]

// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flat(arr, depth = 1) {
  // flatten any arrays one level deep
  let result = []
  for(let i = 0; i<arr.length; i++){
    if(Array.isArray(arr[i]) && depth > 0){
      result.push(...flat(arr[i], depth-1))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

// flat(arr, 2)
// [1, 2, 3, 4]