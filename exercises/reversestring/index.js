// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse("apple"));

module.exports = reverse;

/*

1st Solution:
  return str.split("").reverse().join("");

    *************************************************

2nd Solution:
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;

    *************************************************


 */
