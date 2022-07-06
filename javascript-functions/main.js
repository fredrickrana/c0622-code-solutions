function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

console.log('convertMinutesToSeconds(5) Result:', convertMinutesToSeconds(5));
console.log('greet("Beavis") Result:', greet('Beavis'));
console.log('getArea(17,42) Result:', getArea(17, 42));
console.log('getFirstName({firstName: "Lelouche", lastName:"Lamperouge"}) Result:', getFirstName(({ firstName: 'Lelouche', lastName: 'Lamperouge' })));
console.log('getLastElement(["propane", "and", "propane", "accessories"]) Result:', getLastElement((['propane', 'and', 'propane', 'accessories'])));
