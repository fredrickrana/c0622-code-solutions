/* exported countdown */

// assign an empty array to store data and use as an output
// starting with the number that is given in the parameter, add that value on to the array
// continue to increment down by one and add each number to the array until the number hits zero
// return the array from the function

function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
