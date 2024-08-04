const express = require('express');
const os = require('os');
const app = express();
const port = 8000;

// Эндпоинт для получения имени хоста
app.get('/hostname', (req, res) => {
  const hostname = os.hostname();
  res.send(`Hostname: ${hostname}`);
});

// Эндпоинт для получения имени автора из переменной окружения
app.get('/author', (req, res) => {
  const author = process.env.AUTHOR;
  if (author) {
    res.send(`Author: ${author}`);
  } else {
    res.status(500).send('AUTHOR environment variable not set');
  }
});

// Эндпоинт для получения UUID из переменной окружения
app.get('/id', (req, res) => {
  const uuid = process.env.UUID;
  if (uuid) {
    res.send(`ID: ${uuid}`);
  } else {
    res.status(500).send('UUID environment variable not set');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

