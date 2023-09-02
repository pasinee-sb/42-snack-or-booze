// Write a function called unroll, which takes in a square array of arrays (i.e. a grid with n rows and n columns).
//  An input could look like this:

// const square = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// unroll should take in such a square array and return a single array containing the values in the square.
//  You should obtain the values by traversing the square in a spiral: from the top-left corner,
// move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.

// For the above example, unroll should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].

// Here’s another example:

// const smallerSquare = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"]
// ];

// unroll(smallerSquare); // ["a", "b", "c", "f", "i", "h", "g", "d", "e"]
// Write tests for these cases and make sure your code passes these. Feel free to add any other tests you deem necessary.

function unroll(square) {
  const result = [];

  while (square.length) {
    // Traverse top row from left to right
    result.push(...square.shift());
    // Traverse right column from top to bottom
    for (let i = 0; i < square.length; i++) {
      result.push(square[i].pop());
    }
    // // Traverse bottom row from right to left
    if (square.length) {
      result.push(...square.pop().reverse());
    }
    // Traverse left column from bottom to top
    for (let i = square.length - 1; i >= 0; i--) {
      if (square[i].length) {
        result.push(square[i].shift());
      }
    }
  }

  return result;
}

const squareOne = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const smallerSquare = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(unroll(squareOne));
//Output ["a", "b", "c", "f", "i", "h", "g", "d", "e"]
console.log(unroll(smallerSquare));
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

module.exports = unroll;
