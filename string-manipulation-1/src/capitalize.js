/* exported capitalize */

// assign an empty string to store data and use as an output
// check each character in the string
// the value of a specific character in the string is determined through applying indexes
// the index [0] represents the first character of a string, therefore, if the character that is being checked is the first character, use the toUpperCase method to capitalize that character
// concatenate the value with the empty string
// if it is any other value aside from index[0] (the first character of the string), then use the toLowerCase method to lowercase all letters
// concatenate all the following values onto the string
// return the string from the function

function capitalize(word) {
  var alphabet = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      var firstChar = word[i].toUpperCase();
      alphabet += firstChar;
    } else if (i > 0) {
      var allChar = word[i].toLowerCase();
      alphabet += allChar;
    }
  }
  return alphabet;
}
