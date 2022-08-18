const fs = require('fs');
const file = process.argv[2].toString();
const newFile = process.argv[3].toString();

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  const content = data;
  fs.writeFile(newFile, content, err => {
    if (err) throw err;
  });
});
