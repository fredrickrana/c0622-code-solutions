const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = process.argv[3];
const x = parseFloat(process.argv[2]);
const y = parseFloat(process.argv[4]);

if (operation === '+' || operation === 'plus') {
  console.log('result:', add(x, y));
} else if ((operation === '-' || operation === 'minus')) {
  console.log('result:', subtract(x, y));
} else if (operation === 'x' || operation === 'times') {
  console.log('result:', multiply(x, y));
} else if (operation === '/' || operation === 'over') {
  console.log('result:', divide(x, y));
} else {
  console.log('invalid operation');
}
