/* exported omit */

// create an empty object for data storage and input
// loop through the properties in the source object
// check to see if the a property in the source object is included in the keys array
// if it is not includes, add that property along with its value (using bracket notation) onto the empty object
// return the object from the function

function omit(source, keys) {
  var object = {};
  for (var property in source) {
    if (keys.includes(property) === false) {
      object[property] = source[property];
    }
  }
  return object;
}
