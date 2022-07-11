/* exported getValues */

// create an empty array to store data and use as output
// use a for in loop to the object's properties
// use bracket notation to access the value of each property
// push the values onto the array
// return the array

function getValues(object) {
  var values = [];
  for (var i in object) {
    values.push(object[i]);
  }
  return values;
}
