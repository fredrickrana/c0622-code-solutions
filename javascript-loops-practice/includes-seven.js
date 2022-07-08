/* exported includesSeven */

// go through each element in the array
// if an element in the array is equal to 7, return true
// if there is no element in the array that is equal to 7, return false

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
