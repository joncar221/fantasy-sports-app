// app.js
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('So many users');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
