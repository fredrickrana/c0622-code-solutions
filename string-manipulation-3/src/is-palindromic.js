/* exported isPalindromic */

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
