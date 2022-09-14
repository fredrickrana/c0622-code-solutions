const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      return res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      const errorMessage = { error: 'An unexpected error occurred.' };
      res.status(500).json(errorMessage);
    });
});

app.post('/api/grades/', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  if (name === undefined || course === undefined || score === undefined || Number.isInteger(Number(score)) === false || score < 0 || score > 100) {
    const errorMessage = { error: 'A required content is missing or score must be an integer between 0 and 100.' };
    res.status(400).send(errorMessage);
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      return res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      const errorMessage = { error: 'An unexpected error occurred.' };
      res.status(500).json(errorMessage);
    });
});

app.put('/api/grades/:id', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const id = Number(req.params.id);
  if (name === undefined || course === undefined || score === undefined || Number.isInteger(Number(score)) === false || score < 0 || score > 100 || id <= 0 || Number.isInteger(id) === false) {
    const errorMessage = { error: 'A required content is missing or score must be an integer between 0 and 100 or id must be a positive integer.' };
    res.status(400).send(errorMessage);
    return;
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *;
  `;
  const params = [name, course, score, id];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      if (result.rowCount === 0) {
        const errorMessage = { error: `Cannot find grade with id ${id}` };
        return res.status(404).send(errorMessage);
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      const errorMessage = { error: 'An unexpected error occurred.' };
      res.status(500).json(errorMessage);
    });
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isInteger(id) === false || id <= 0) {
    const errorMessage = { error: 'GradeId must be a postive integer.' };
    res.status(400).send(errorMessage);
    return;
  }
  const params = [id];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  db.query(sql, params)
    .then(result => {
      if (result.rowCount === 1) {
        return res.status(204).json();
      } else {
        const errorMessage = { error: `Cannot find note with id ${id}` };
        return res.status(404).send(errorMessage);
      }
    })
    .catch(err => {
      console.error(err);
      const errorMessage = { error: 'An unexpected error occurred.' };
      res.status(500).json(errorMessage);
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000!');
});
