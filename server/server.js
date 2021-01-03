const express = require('express');
const router = require('./router.js');
const app = express();
const port = 3000;
const path = require('path');
const parser = require('body-parser');
const db = require('./db.js')

app.use(parser.json());

app.use('/', router);

app.use(express.static(('dist'));

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/api/movies', (req, res) => {
  res.send('Monsters University, Frozen, Moana')
})

app.listen(port, () => console.log(`listening on port ${port}`));