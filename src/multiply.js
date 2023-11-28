// multiply.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Multiply API listening at http://localhost:${port}`);
});