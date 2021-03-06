const express = require('express');
const toDoListRouter = require('./src/routes/notes');
const path = require ('path');
const methodOverride = require('method-override');

const app = express();
require('./config/database');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', toDoListRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.')
})