const fs = require('fs');
const dataJSON = require('./data.json');
const action = process.argv[2];

// node app.js read
if (action === 'read') {
  for (const id in dataJSON.notes) {
    console.log(`${id}: ${dataJSON.notes[id]}`);
  }
}

// node app.js create
if (action === 'create') {
  const notes = dataJSON.notes;
  notes[dataJSON.nextId] = process.argv[3];
  fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), err => {
    if (err) throw err;
  });
}

// node app.js update
if (action === 'update') {
  const notes = dataJSON.notes;
  notes[process.argv[3]] = process.argv[4];
  fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), err => {
    if (err) throw err;
  });
}

// node app.js delete
if (action === 'delete') {
  delete dataJSON.notes[process.argv[3]];
  fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), err => {
    if (err) throw err;
  });
}
