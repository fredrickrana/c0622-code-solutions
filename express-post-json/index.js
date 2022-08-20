const express = require('express');
var nextId = 1;
const grades = {};
const app = express();
const middleware = express.json();

app.use(middleware);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (var grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const data = req.body;
  data.id = nextId;
  grades[data.id] = data;
  nextId++;
  res.send(data);
  res.status(201);
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
