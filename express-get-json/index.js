const express = require('express');
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
const app = express();

app.get('/api/grades', (req, res) => {
  const array = [];
  for (var grade in grades) {
    array.push(grades[grade]);
  }
  res.json(array);
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
