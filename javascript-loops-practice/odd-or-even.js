/* exported oddOrEven */
// assign an empty array to store data and use as an output
// go through each number in the array
// check to see if the number is an even or odd number by dividing by two (if there is a remainder, it is odd and if there is none, it is even)
// once odd or even is determined, add that value (odd/even) to the empty array
// return the array from the function

function oddOrEven(numbers) {
  var values = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      values.push('even');
    } else {
      values.push('odd');
    }
  }
  return values;
}
