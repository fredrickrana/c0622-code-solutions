const fs = require('fs');

let message = '';
for (var i = 2; i < process.argv.length; i++) {
  message += process.argv[i];
  message += '\n';
}

fs.writeFile('note.txt', message, err => {
  if (err) throw err;
});
