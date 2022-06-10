const express = require('express');
const Notes = require('../models/notes');

const router = express.Router();

router.get('/', async (req, res) =>{
  try {
    const oldNotes = await Notes.find({})
    res.status(200).json(oldNotes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) =>{
  try {
    const { id } = req.params;
    const oldNote = await Notes.findById(id)
    res.status(200).json(oldNote);
  } catch (error) {
    res.status(500).json(error);
  }
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

router.put('/:id', async (req, res) => {
  const { note, date } = req.body;
  const { id } = req.params;

  try {
    const updateNote = await Notes.findOneAndUpdate(id, {
      note,
      date,
    }, {new: true})
    res.status(200).json(updateNote);
  } catch (error) {
    res.status(422).json(error);
  }
})

module.exports = router;