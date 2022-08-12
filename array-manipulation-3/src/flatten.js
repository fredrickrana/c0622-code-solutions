/* exported flatten */

// create an empty array for output and storing elements
// check through each element of the array
// if an element is an array, go through the elements within that array and push its individual values onto the empty array
// if an element is just a value (not an array), push it to the empty array
// return the array

function flatten(array) {
  var unitedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      unitedArray.push(array[i]);
    } else {
      for (var x = 0; x < array[i].length; x++) {
        unitedArray.push(array[i][x]);
      }
    }
  }
  return unitedArray;
}
