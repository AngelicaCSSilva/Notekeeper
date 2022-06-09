const express = require('express');
const toDoListRouter = require('./src/routes/toDoList');
const app = express();
require('./config/database');

app.use('/todo', toDoListRouter)

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.')
})