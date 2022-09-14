const random = Math.random().toString() + '\n';
const fs = require('fs');

fs.writeFile('random.txt', random, err => {
  if (err) throw err;
});
