/* exported getStudentNames */

// assign an empty array to store data and use as an output
// go through each element in the array
// get the value of the property name within each object
// add that value to the array
// continue until the end of the array length
// return the array from the function

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
