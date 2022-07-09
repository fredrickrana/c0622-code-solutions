/* exported reverse */

// either use unshift method or loop backwards and use push method

// create an empty array literal in order to store data and use as output
// go through each element in the array starting with the last element
// add each element into the array
// return the array from the function

function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}

// Alternate Solution

// create an empty array literal in order to store data and use as output
// go through each element in the array
// add each element to the end of the array (unshift method)
// return the array from the function

// function reverse(array) {
//   var backwards = [];
//   for (var i = 0; i < array.length; i++) {
//     backwards.unshift(array[i]);
//   }
//   return backwards;
// }
