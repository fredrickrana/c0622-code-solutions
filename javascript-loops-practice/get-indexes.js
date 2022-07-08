/* exported getIndexes */

// assign an empty array to store data and use as an output
// check each element in the array
// for each element, add a number to the new array starting from zero
// return the array from the function

function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
