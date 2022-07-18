/* exported ransomCase */

// create an empty string for data storage and output
// go through each character in the string
// for each even character, use the toLowerCase method to lowercase the character
// for each odd character, use the toUpperCase method to uppercase the chatacter
// add each character to the string
// return the string from the function

function ransomCase(string) {
  var characters = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      characters += string[i].toLowerCase();
    } else {
      characters += string[i].toUpperCase();
    }
  }
  return characters;
}
