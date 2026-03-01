const express = require('express');
const app = express();
const PORT = 5000;

app.get('/hello', (req, res) => {
  res.send('hello bro');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});