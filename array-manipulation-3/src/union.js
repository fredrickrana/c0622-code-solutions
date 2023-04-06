/* exported union */

// create an empty array for output and storing elements
// go through all the elements within the first array
// push all elements into the initial empty array
// if at any point, there is a value that was already pushed previously from the empty array, skip it ( in other words, if the initial empty array does not contain the value of an element, push it to the initial empty array)
// go through all the elements within the second array
// push all elements into the initial empty array
// if at any point, there is a value that was already pushed previously from the empty array, skip it (in other words, if the initial empty array does not contain the value of an element, push it to the initial empty array)
// return the initial empty array from the function

function union(first, second) {
  var allElements = [];
  for (var i = 0; i < first.length; i++) {
    if (allElements.includes(first[i]) === false) {
      allElements.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (allElements.includes(second[x]) === false) {
      allElements.push(second[x]);
    }
  }
  return allElements;
}
