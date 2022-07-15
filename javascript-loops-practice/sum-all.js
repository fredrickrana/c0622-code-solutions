/* exported sumAll */

// assign an value (the number zero) to store following data and use as an output
// go through each number in the array
// for each iteration, add the number to original value
// continue to add each number until the end of the array
// return that value from the function

function sumAll(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
