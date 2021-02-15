/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

// SOLUTION 1 - BEGINNER
// function toCamelCase(phrase) {
//   // If phrase contains - split on -
//   let splitChar = '';
//   if (phrase.includes('-')) {
//     splitChar = '-';
//     // If phrase contains _ split on _
//   } else if (phrase.includes('_')) {
//     splitChar = '_';
//   }

//   const words = phrase.split(splitChar);

//   // Loop through each word
//   const wordsWCaps = words.map((word, index) => {
//     // Capitalize first letter of each word
//     if (index === 0) {
//       return word;
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//   // Join words and return
//   return wordsWCaps.join('');
// }


// convert string to array of words
// Loop through array
  // for each word after 1st, convert to capital casing
  // join words into single string

// SOLUTION 2 - ADVANCED
function toCamelCase(phrase) {
  const words = phrase.split(/[-_]/);

  const convertedWords = words.map((word, index) => {
    if (!index) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return convertedWords.join('');
}
