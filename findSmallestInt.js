/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this problem, that the supplied array will not be empty.
*/

///////////////////////////////////////////////////////
// SOLUTION 1 - Beginner
// function findSmallestInt(array) {
//   let smallestInt = null;

//   // Loop through array
//   array.forEach((int) => {
//     if (smallestInt === null) {
//       smallestInt = int;
//     } else {
//       // if number is smallest so far make it new smallest number
//       if (int < smallestInt) {
//         smallestInt = int;
//       }
//     }
//   });
//   // return the smallest number
//   return smallestInt;
// }

///////////////////////////////////////////////////////
// SOLUTION 2 - Advanced
// function findSmallestInt(array) {
//   return array.reduce((smallest, int) => {
//     return int < smallest ? int : smallest;
//   }, Infinity);
// }

///////////////////////////////////////////////////////
// SOLUTION 3 - GOTCHA
function findSmallestInt(array) {
  return Math.min(...array);
}
