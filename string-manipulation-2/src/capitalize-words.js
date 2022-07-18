/* exported capitalizeWords */

// create an empty string for data storage and output
// use the toUpperCase method to turn the string into uppercase characters
// add the first index to the empty string
// go through each character in the string starting from the second letter
// if the letter does not equal space, add the character to the initial empty string in lowercase form
// if the character does equal space, add the space to the empty string, and add the character after that in its uppercase from
// increment i by one in order to skip the already added uppercase character
// return the phrase from the function

function capitalizeWords(string) {
  var phrase = '';
  var upperCase = string.toUpperCase();
  phrase += upperCase[0];
  for (var i = 1; i < string.length; i++) {
    if (upperCase[i] !== ' ') {
      phrase += upperCase[i].toLowerCase();
    } else if (upperCase[i] === ' ') {
      phrase += ' ';
      phrase += upperCase[i + 1].toUpperCase();
      i++;
    }
  }
  return phrase;
}
