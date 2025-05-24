const express = require('express');
const db = require('./db/db');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.get('/', async (req, res) => {
  const result = await db.query('SELECT NOW()');
  res.send(`Database time: ${result.rows[0].now}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
