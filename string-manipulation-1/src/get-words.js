/* exported getWords */

// assign an empty array to store data and use as an output
// take the value of the string in the parameter
// if the value of string is an empty string, return an empty array
// use the split method with the argument of string space, which will split the value of the string into different elements within an array
// return the array from the function

function getWords(string) {
  if (string === '') {
    var emptyArray = [];
    return emptyArray;
  }
  return string.split(' ');
}
