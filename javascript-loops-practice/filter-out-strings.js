/* exported filterOutStrings */

// assign an empty array to store data and use as an output
// go through each element in the array
// check to see if each specific element is a string
// if it is not a string, add that element to the array
// return the array from the function

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof '') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
