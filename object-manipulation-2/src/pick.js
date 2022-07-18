/* exported pick */

// create an empty object for data storage and input
// loop through the array elements in keys
// if the element within the keys array matches with a property in the source object (if it is not undefined), add its value into the empty object
// loop through the properties in the source object
// return the object from the function

function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      object[keys[i]] = source[keys[i]];
    }
  }
  return object;
}

// ALTERNATE SOLUTION. Debugger and console.log show correct output for all tests.

// function pick(source, keys) {
//   var object = {};
//   for (var element in keys) {
//     for (var property in source) {
//       if (keys[element] === property) {
//         object[property] = source[keys[element]];
//       }
//     }
//   }
//   console.log(object);
//   return object;
// }
