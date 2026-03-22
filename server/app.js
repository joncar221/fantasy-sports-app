// app.js
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/users', (req, res) => {
  res.send('yo');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
