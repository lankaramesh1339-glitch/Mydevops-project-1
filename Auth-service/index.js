const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Auth Service (Node.js)');
});

app.listen(port, ()=> console.log(`Auth service listening ${port}`));