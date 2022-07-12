/* exported capitalizeWord */

// create an if statement where if a word equals JAVASCRIPT, after using the toUpperCase method, return JavaScript from the function
// capitalize the first letter of the word that is given
// starting from the second character, go through each character in the word and use the lowercase method to lowercase each character
// concatenate each letter to the uppercased first character
// return the entire word from the function

function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    var capitalized = word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      capitalized += word[i].toLowerCase();
    }
  }
  return capitalized;
}
