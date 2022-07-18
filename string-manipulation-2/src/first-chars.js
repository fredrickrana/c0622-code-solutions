/* exported firstChars */

// in order to eliminate characters in a string, use the slice method
// the slice method of the string object would be called with two arguments
// the first argument (which is the start of the first letter to include) and the second argument (which is the index of the first character to exclude)
// all other characters are removed
// return the method call from the function

function firstChars(length, string) {
  return string.slice(0, length);
}
