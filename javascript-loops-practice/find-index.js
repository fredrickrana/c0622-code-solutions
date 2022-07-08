/* exported findIndex */
// go through each number in the array
// take the value given on the second parameter
// check to see if value is equal to a number through each iteration of the array
// if a number is found that is equal to value, return i
// if none of the numbers are equal to the value, return -1

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}
