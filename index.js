const express = require('express');

const app = express();

const port = process.env.PORT || 3002;

app.listen(port, () => console.log('Servidor rodando...'));

async function getMe() {
  const response = fetch(process.env.REACT_APP_API_URL);

  return response;
}

setInterval(() => getMe(), 120000);