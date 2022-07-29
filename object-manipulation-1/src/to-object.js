/* exported toObject */

// create an empty object to store data and use as output
// use indexes to access each element in the array
// use bracket notation to set the property and value of an object
// return the object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
