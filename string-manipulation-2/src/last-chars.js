/* exported lastChars */

// in order to eliminate characters in a string, use the slice method
// the slice method of the string object would be called with two arguments
// the first argument (which is the start of the first letter to include)
// since we are starting from right to left (the last character) we would use negative length as the argument in order to count from the end
// return the method call from the function

function lastChars(length, string) {
  return string.slice(-length);
}
