/* exported getLastChar */
// the last character is defined using the length property minus 1
// check the character for a string using indexes
// take the value of the string parameter along with the length property minus 1 as an index
// return the result from the function

function getLastChar(string) {
  return string[string.length - 1];
}
