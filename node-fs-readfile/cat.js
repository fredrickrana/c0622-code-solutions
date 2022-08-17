const fs = require('fs');

for (var i = 2; i < process.argv.length; i++) {
  const file = process.argv[i];
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
