/* exported capitalize */

// use the touppercase method to capitalize the first letter of the word
// if the word has a length greater than one, use a loop to check each individual character
// take the value of each character an use the tolowercase method to lower case each character
// add each character to the first uppercased character
// return the word from the function

function capitalize(word) {
  var alphabet = word[0].toUpperCase();
  if (word.length > 1) {
    for (var i = 1; i < word.length; i++) {
      alphabet += word[i].toLowerCase();
    }
  }
  return alphabet;
}
