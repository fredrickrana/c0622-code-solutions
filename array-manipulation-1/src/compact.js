/* exported compact */

// objective is to omit all falsey values and return all truthy values in an array
// create an empty array literal in order to store data and use as output
// go through each element in the array
// check to see if the value is falsey or truthy (falsey values include null, 0, -0, false, undefined)
// falsey values always return false and truthy values return true
// use boolean method to check between true and false for each element in the array
// add all truthy values to the empty array
// return the array from the function

function compact(array) {
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}
