/* exported isPalindromic */

// palindrome: word or phrase that reads the same backwards as forward
// create a empty string to input data and for comparison
// check each character in the string and add to the intitial empty string variable
// compare the two strings together
// remove the spaces for the original string and the initial empty string variable
// if the strings are equal, return true
// if the strings are not equal, return false

function isPalindromic(string) {
  var word = '';
  for (var i = string.length - 1; i >= 0; i--) {
    word += string[i];
  }
  if (word.replaceAll(' ', '') !== string.replaceAll(' ', '')) {
    return false;
  } else {
    return true;
  }
}
