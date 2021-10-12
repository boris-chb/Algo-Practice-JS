// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverse = (str) => {
  return str.split("").reduce((rev, char) => char + rev, "");
};

function reverseInt(n) {
  reversed = reverse(n.toString());
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

/* 
Complicated Solution by me:
* * * * * * * * * * * * * * * * * * * *

const reverse = (str) => {
  return str
    .split("")
    .reduce((rev, char) => (char === "0" ? rev : char + rev), "");
};

function reverseInt(n) {
  if (n === 0) {
    return 0;
  }
  let num = n.toString();
  let reversed = reverse(num);
  // Add minus in front if number is negative
  if (Math.sign(n) === -1) {
    reversed = "-" + reverse(num);
  }
  return parseInt(reversed);
}

* * * * * * * * * * * * * * * * * * * *

*/
