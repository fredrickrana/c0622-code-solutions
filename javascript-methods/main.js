var firstNumber = 100;
var secondNumber = 1000;
var thirdNumber = 10000;
var maximimValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('maximumValue:', maximimValue);

var heroes = ['Spiderman', 'Batman', 'Superman', 'Ironman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'HTML',
    author: 'Dr. HTML'
  },
  {
    title: 'CSS',
    author: 'Dr. CSS'
  },
  {
    title: 'JavaScript',
    author: 'Dr. JavaScript'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Fredrick Rana';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
