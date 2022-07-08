/* exported addSuffixToAll */

// assign an empty array to store data and use as an output
// go through each word in the array and add that the suffix to the end of that word
// add the result of the expression to the array
// return the array from the function

function addSuffixToAll(words, suffix) {
  var word = [];
  for (var i = 0; i < words.length; i++) {
    word.push(words[i] + suffix);
  }
  return word;
}
