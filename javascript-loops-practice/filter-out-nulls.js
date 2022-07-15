/* exported filterOutNulls */

// assign an empty array to store data and use as an output
// go through each element in the array
// if the value of the array is not equal to null, then add that value onto the array
// return the array from the function

function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
