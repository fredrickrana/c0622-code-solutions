/* exported truncate */

// create an empty string for data storage and output
// go through each character in the string using a loop
// make sure that the number of times gone through the loop is less than the length of the string and less than the length (number in the parameter)
// add on to the empty string for each character that returns from the loop
// return the string concantenated with the string elllipsis

function truncate(length, string) {
  var characters = '';
  for (var i = 0; i < length && i < string.length; i++) {
    characters += string[i];
  }
  return characters + '...';
}
