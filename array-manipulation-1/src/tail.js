/* exported tail */

// create an empty array literal in order to store data and use as output
// go through through each element in the array starting with the second element
// add all elements to the empty array
// return the array from the function

function tail(array) {
  var deleteFirst = [];
  for (var i = 1; i < array.length; i++) {
    deleteFirst.push(array[i]);
  }
  return deleteFirst;
}
