const express = require('express');
const app = express();
const fs = require('fs');
const dataJSON = require('./data.json');
const middleware = express.json();
app.use(middleware);

const noteDetails = dataJSON.notes;

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (var key in noteDetails) {
    notes.push(noteDetails[key]);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number.isInteger(Number(id)) === false || Math.sign(id) === -1 || Number(id) === 0) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else if (noteDetails[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(noteDetails[id]);
  }
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (note.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const object = {};
    note.id = dataJSON.nextId;
    object.id = note.id;
    object.content = note.content;
    noteDetails[note.id] = object;
    dataJSON.nextId++;
    fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201);
        res.send(note);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number.isInteger(Number(id)) === false || Math.sign(id) === -1 || Number(id) === 0) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else if (noteDetails[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete noteDetails[id];
    fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = req.body;
  if (Number.isInteger(Number(id)) === false || Math.sign(id) === -1 || Number(id) === 0) {
    res.status(400).json({ error: 'id must be a postive integer' });
  } else if (note.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (noteDetails[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    const object = {};
    object.id = id;
    object.content = note.content;
    noteDetails[id] = object;
    fs.writeFile('./data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200);
        res.send(noteDetails[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
