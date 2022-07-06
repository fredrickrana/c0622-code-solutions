var student = {
  firstName: 'Fredrick',
  lastName: 'Rana',
  age: 24
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Physical Therapy Aide';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Model X',
  year: 2024
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Ekali',
  type: 'cat'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
