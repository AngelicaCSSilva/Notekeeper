const express = require('express');
const toDoListRouter = require('./src/routes/notes');
const path = require ('path');

const app = express();
require('./config/database');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', toDoListRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.')
})