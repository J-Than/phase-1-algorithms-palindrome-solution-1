function isPalindrome(word) {
  // Write your algorithm here
  return reverseWord(word) === word;
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  Create a function to reverse a word
  Compare the reversed word with the original word
  Return true if they match, false if not
*/

/*
  Add written explanation of your solution here
  It takes an input of a word, converts it to an array, reverses the array, then combines the resulting array into a string.
  The resulting string is compared with the original word.
  If they match, the function returns true; otherwise false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
