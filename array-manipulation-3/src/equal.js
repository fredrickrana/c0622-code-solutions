/* exported equal */

// check to see if the length of the first array is equal to the second array
// if lengths are not equal return false
// if lengths are equal, proceed to checking each element within the first array
// because it is matching index-for-index, while checking each element in the first array, simultaneously check for the same element within the second array
// if the index does not match return false
// if all match return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
