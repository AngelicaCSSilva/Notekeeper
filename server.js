const express = require('express');
const toDoListRouter = require('./src/routes/notes');
const app = express();
require('./config/database');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/', toDoListRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.')
})