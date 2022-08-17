const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
// require is a function used to import other modules

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

// process.argv() method is used for returning all the command-line arguments that were passed when the Node.js process was being launched
// process.argv produces a string

// node module.js firstArg secondArg
// process.argv[0] === 'node'
// process.argv[1] === 'myprogram.js'
// process.argv[2] === 'firstarg'
