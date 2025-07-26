### Update - Chatbot logic tested on 26 July
const express = require('express');
const cors = require('cors');
const path = require('path');
const csvParser = require('./utils/csvParser');

const app = express();
app.use(cors());
const PORT = 5000;

const users = csvParser(path.join(__dirname, 'data/users.csv'));
const orders = csvParser(path.join(__dirname, 'data/orders.csv'));
const products = csvParser(path.join(__dirname, 'data/products.csv'));

app.get('/api/users', async (req, res) => {
  const data = await users;
  res.json(data);
});

app.get('/api/orders', async (req, res) => {
  const data = await orders;
  res.json(data);
});

app.get('/api/products', async (req, res) => {
  const data = await products;
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
