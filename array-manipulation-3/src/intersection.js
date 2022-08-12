/* exported intersection */

// create an empty array for output and storing elements
// go through each element within the first array
// for each element in the first array, compare the value to all the elements in the second array
// if a value matches the element in the first array with an element in the second array, push the element into the intial empty array
// return the initial empty array from the function

function intersection(first, second) {
  var match = [];
  for (var i = 0; i < first.length; i++) {
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        match.push(first[i]);
      }
    }
  }
  return match;
}
