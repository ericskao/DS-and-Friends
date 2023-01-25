const curry = (fn) => {
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.call(this, ...args)
    } else {
      // bind the current passed args into another function
      return curried.bind(this, ...args)
    }
  }
}

// join expects 3 params
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

// curriedJoin(1, 2)(3) // '1_2_3'

console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1, 2)(3))
console.log(curriedJoin(1)(2, 3))
console.log(curriedJoin(1)(2)(3))


// binding
// let multiply = (x,y) => {
//   return x * y
// }

// closure
const multiply = (x) => {
  return (y) => {
    return x*y
  }
}

// create new function with 2 passed as first param for that function
// let multiplyByTwo = multiply.bind(this, 2)
// console.log(multiplyByTwo(3))
// console.log(multiply.bind(this, 2, 3)())

console.log(multiply(2)(5))

