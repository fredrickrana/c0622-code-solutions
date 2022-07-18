/* exported defaults */

// the function would modify the target object
// go through each of the properties in the source object
// if the property in the source object is not equal to the property in the target object and if the property in the target object is undefined, add the property from the source object and its value to the target object
// return the target object from the function

function defaults(target, source) {
  for (var property in source) {
    if (property !== target[property] && target[property] === undefined) {
      target[property] = source[property];
    }
  }
  return target;
}
