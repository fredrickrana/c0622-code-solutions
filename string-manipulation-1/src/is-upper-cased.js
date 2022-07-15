/* exported isUpperCased */

// go through each character in the string given to us in the parameter word
// objective is to try and find if all characters are capitalized. Once a lowercase letter is found, the function ends and returns a result
// use the toUpperCase method and compare each character to its upper case version
// if each character that is being checked is not equal to its upper case version, return false
// continue to the end of the string and if no values are equal then return true

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
