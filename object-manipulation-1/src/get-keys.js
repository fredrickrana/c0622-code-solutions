/* exported getKeys */

// create an empty array to store data and use as output
// use a for in loop to go through the object's property keys
// push each key into the empty array
// return the array

function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}
