const express = require('express');
const toDoListRouter = require('./src/routes/notes');
const app = express();
require('./config/database');

app.use('/', toDoListRouter)

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.')
})