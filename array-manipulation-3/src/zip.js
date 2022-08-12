/* exported zip */

// make sure that the length of both arrays are equal to each other
// if both arrays are not equal to each other, delete the last element of the array with greater length until both lengths are equal
// if first array is larger, delete until it matches length of second array
// if second array is larger, delete until it matches length of the first array
// once arrays have equal length, create three empty arrays
// the first array is going to store the values found within the first array
// the second array is going to store the values found within the second array
// the third array will be storing all values and will be returned from the function
// check each element within the first array, and check the value of the second array that has the same index
// add each value to one array (first and second)
// combine the elements within each array and store into a seperate array (third)
// delete the elements of the previous arrays (first and second) so that it returns back to an empty array
// continue to add all elements to the third array
// return the third array from the function

function zip(first, second) {
  if (first.length !== second.length) {
    if (first.length > second.length) {
      first.splice(first.length - 1);
    } else if (second.length > first.length) {
      second.splice(second.length - 1);
    }
  }
  var combine = [];
  var combineTwo = [];
  var combineThree = [];
  for (var i = 0; i < first.length; i++) {
    combine.push(first[i]);
    combineTwo.push(second[i]);
    var arrayThree = combine.concat(combineTwo);
    combineThree.push(arrayThree);
    combine.splice(0);
    combineTwo.splice(0);
  }
  return combineThree;
}
