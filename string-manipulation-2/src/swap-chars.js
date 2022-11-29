/* exported swapChars */

// create an empty string for data storage and output
// go through each character in the string
// concatenate each character to the initial empty string
// once you reach the character within the firstIndex, concatenate the value of the secondIndex within the string
// once you reach the character within the secondIndex, concatenate the value of the firstIndex within the string
// continue until the end of the string length
// return the initial empty string from the function

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (firstIndex === i) {
      newString += string[secondIndex];
    } else if (secondIndex === i) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
