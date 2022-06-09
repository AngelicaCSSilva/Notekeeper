const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
  res.send('Conectado.')
});


router.post('/', (req, res) => {
  res.statusCode(200).end();
});

module.exports = router;