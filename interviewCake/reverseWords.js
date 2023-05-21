// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// JavaScript
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

const reverseWords = (message) => {
  const reverser = (start, end) => {
    for(let i = 0; i<(end-start)/2; i++){
      let temp = message[i+start]
      message[i+start] = message[end-i]
      message[end-i] = temp
    }
  }

  for(let i = 0; i<message.length/2; i++){
    let temp = message[i]
    message[i] = message[message.length - 1 - i]
    message[message.length - 1 - i] = temp
  }

  // reverse each 'word' in message
  let startingIndex = 0;
  let endingIndex;
  for(let i = 0; i<message.length; i++){
    if(message[i] === ' '){
      // need to reverse the word
      endingIndex = i-1 // before space
      // use reverser from startingIndex to endingIndex
      reverser(startingIndex, endingIndex)
      // change starting index
      startingIndex = i+1
    }
  }
  // need to run it one more time on last word
  reverser(startingIndex, message.length-1)
  return message
}