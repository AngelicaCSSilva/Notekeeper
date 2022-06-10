const express = require('express');
const Notes = require('../models/notes');

const router = express.Router();

router.get('/', async (req, res) =>{
  try {
    const notes = await Notes.find({});
    res.status(200).render('pages/index', { notes: notes });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/new', async(req, res) => {
  try {
    const note = new Notes();
    res.status(200).render('pages/new', { notes: note });
  } catch (error) {
    res.status(422).json(error);
  }
})

router.get('/:id/edit', async(req, res) => {
  try {
    const { id } = req.params;
    const notes = await Notes.findById(id);
    res.status(200).render('pages/edit', { notes: notes })
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get('/:id', async (req, res) =>{
  try {
    const { id } = req.params;
    const oldNote = await Notes.findById(id);
    res.status(200).json(oldNote);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  const { note, date, title } = req.body;
  const newNote = new Notes({
    title,
    note,
    date
  })

  try {
    await newNote.save();
    res.redirect('/')
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  const { note, date, title } = req.body;
  const { id } = req.params;
  const notes = await Notes.findById(id);

  try {
    await notes.updateOne({
      title,
      note,
      date,
    });
    res.redirect('/');
  } catch (error) {
    res.status(422).json(error);
  }
})

router.delete('/:id', async(req, res) => {
  const { id } = req.params;

  try {
    await Notes.findByIdAndDelete(id)
    res.redirect('/');
  } catch (error) {
    res.status(422).json(error);
  }
})

module.exports = router;