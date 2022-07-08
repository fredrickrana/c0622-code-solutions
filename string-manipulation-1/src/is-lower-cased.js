/* exported isLowerCased */

// go through each character in the string
// check to see if all characters are lowercased. if a single character is uppercased, the function ends and a result is returned
// take the value of the character and compare to its lowercased version
// if the value of the character and its lowercased version are not equal, return false
// if the value of the character and its lowercased version are equal, continue to go through the string
// if all values are equal, return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
