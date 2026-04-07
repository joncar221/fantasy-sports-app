// app.js
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const server = require('http').createServer(app);

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/leagues', cors(), async (req, res) => {
  const leagues = await prisma.league.findMany();
  res.json(leagues);
});

app.post('/leagues', cors(), async (req, res) => {
  const { name, description } = req.body;
  const newLeague = await prisma.league.create({ data: { name, ownerId: 1 } });
  res.status(201).json(newLeague);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
