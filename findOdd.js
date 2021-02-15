/*
Given an array, find the int that appears an odd number of times. Assume there will always be only one integer that appears an odd number of times.

PSUEDOCODE
// Loop through array
  // for each int
  // find number of occurrences
  // if occurrences is odd return int
*/

// SOLUTION 1
// function findOddOccurrence(array) {
//   let oddOccuringNum = null;

//   // Loop through array
//   array.forEach((int) => {
//     // for each int
      
//     // find number of occurrences
//       let occurrences = 0;

//       array.forEach((num) => {
//         if (num === int) {
//           occurrences += 1;
//         }
//       });

//       // if occurrences is odd return
//       if (occurrences % 2 === 1) {
//         oddOccuringNum = int;
//       }
//   });

//   return oddOccuringNum;
// }

// SOLUTION 2
// Loop through array
  // for each int
  // find number of occurrences
  // if occurrences is odd return int
// function findOddOccurrence(array) {
//   return array.find((int) => {
//     const occurrences = array.filter(num => num === int).length;
//     return occurrences % 2 === 1;
//   });
// }

// console.log(findOddOccurrence([0, 0, 1, 1, 2]));
