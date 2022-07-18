/* exported swapChars */

// swap the characters on the string based on the indexes that are given
// store in a variable the characters of the indexes that need to be switched
// use the split method to turn the string into an array
// once an array, use the splice method with three arguments (start, deleteCount, item1)
// this will replace the characters with each index
// use the join method to join the array together to recreate the string
// return the string from the function

function swapChars(firstIndex, secondIndex, string) {
  var one = string[firstIndex];
  var two = string[secondIndex];
  var array = string.split('');
  array.splice(firstIndex, 1, two);
  array.splice(secondIndex, 1, one);
  return array.join('');
}
