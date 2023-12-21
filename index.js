const express = require('express');

const app = express();

const port = process.env.PORT || 3002;

app.listen(port, () => console.log('Servidor rodando...'));

async function getMe() {
  const response = fetch('http://localhost:3001');

  return response;
}

setInterval(() => getMe(), 10800000);