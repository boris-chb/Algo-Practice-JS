// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const reverse = (str) => {
//   return str.split("").reduce((rev, char) => char + rev, "");
// };

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;

/* 
Solution 1:
  reversed = str.split("").reduce((rev, char) => char + rev, "");
  return str === reverse(str);

Solution 2 (every):

*/
