/* exported reverseWord */

// assign an empty string to store data and use as an output
// take the value of the string and go through each character starting from the last character
// the value of the last character is the length of the string minus 1
// for each character, concatenate the letter with the empty string
// return the result of the expression from the function

function reverseWord(word) {
  var backwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards;
}
