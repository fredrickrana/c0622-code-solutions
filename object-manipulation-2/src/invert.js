/* exported invert */

// create an empty object for data storage and input
// loop through the properties in the source object
// using bracket notation, assign the value of the property in the source object as a property (object[source[i]]) and set the value to the property that is checked in the loop
// return the object from the function

function invert(source) {
  var object = {};
  for (var i in source) {
    object[source[i]] = i;
  }
  return object;
}
