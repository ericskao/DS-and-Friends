// 176. undefined to null

// One of the differences between null and undefined is how they are treated differently in JSON.stringify().

// JSON.stringify({a: null})      // '{"a":null}'
// JSON.stringify({a: undefined}) // '{}'

// JSON.stringify([null])         // '[null]'
// JSON.stringify([undefined])    // '[null]'
// This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.

// You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

// undefinedToNull({a: undefined, b: 'BFE.dev'})
// // {a: null, b: 'BFE.dev'}

// undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
// // {a: ['BFE.dev', null, 'bigfrontend.dev']}

// function undefinedToNull(arg) {
//   // arg can be primitive, array, or object, or undefined
//   if(arg === undefined || arg === null){
//     return null
//   } else if(Array.isArray(arg)){
//     let newArr = []
//     for(let i = 0; i<arg.length; i++){
//       newArr.push(undefinedToNull(arg[i]))
//     }
//     return newArr
//   } else if(typeof arg === 'object'){
//     let output = {}
//     for(let key in arg){
//       output[key] = undefinedToNull(arg[key])
//     }
//     return output
//   } else {
//     return arg
//   }
// }

console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}))
// {a: null, b: 'BFE.dev'}

console.log(undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}))
// {a: ['BFE.dev', null, 'bigfrontend.dev']}

