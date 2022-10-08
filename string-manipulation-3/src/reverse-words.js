/* exported reverseWords */

// create a empty string for data output
// the goal is to check each word within the string and to reverse the order of the word
// use the split method to separate the string by spaces
// for each word, go through each letter starting from the end and add it onto the intial empty string
// include a space everytime a word is added to the initial empty string
// return the initial empty string

function reverseWords(string) {
  var newString = '';
  var split = string.split(' ');
  for (var i = 0; i < split.length; i++) {
    for (var x = split[i].length - 1; x >= 0; x--) {
      newString += split[i][x];
    }
    if (i < split.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
