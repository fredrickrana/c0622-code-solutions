/* exported initial */

// create an empty array literal in order to store data and use as output
// go through through each element in the array excluding the last element
// add all elements to the empty array
// return the array from the function

function initial(array) {
  var noLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    noLast.push(array[i]);
  }
  return noLast;
}
