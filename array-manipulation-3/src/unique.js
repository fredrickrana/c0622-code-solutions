/* exported unique */

// create an empty array for output and storing elements
// check each element within the array
// store each element that is passed into the empty array
// if there is an element that is already included within the array, skip the element
// return the initial empty array from the function

function unique(array) {
  var similarElements = [];
  for (var i = 0; i < array.length; i++) {
    if (similarElements.includes(array[i]) === false) {
      similarElements.push(array[i]);
    }
  }
  return similarElements;
}
