const express = require('express');
const Notes = require('../models/notes');

const router = express.Router();

router.get('/', (req, res) =>{
  res.send('Conectado.')
});


router.post('/', async (req, res) => {
  const { note, date } = req.body;

  try {
    const newNote = await Notes.create({
      note,
      date,
    })
    res.status(200).json(newNote);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;