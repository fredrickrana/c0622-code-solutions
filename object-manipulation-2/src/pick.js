/* exported pick */

// create an empty object for data storage and input
// loop through the array elements in keys
// loop through the properties in the source object
// if the element in the array matches the property in the object,  add the property and its value onto the empty object
// return the object from the function

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

// function pick(source, keys) {
//   var object = {};
//   for (var i = 0; i < keys.length; i++) {
//     if (source[keys[i]] !== undefined) {
//       object[keys[i]] = source[keys[i]];
//     }
//   }
//   return object;
// }
