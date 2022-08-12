/* exported difference */

// create an empty array for output and storing elements
// look through the elements within the first array
// if there is an element that is not included within the second array, push it to the initial empty array
// look through the elements within the second array
// if there is an element that is not included within the first array, push it to the initial empty array
// return the initial array from the function

function difference(first, second) {
  var differentElements = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      differentElements.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (first.includes(second[x]) === false) {
      differentElements.push(second[x]);
    }
  }
  return differentElements;
}
