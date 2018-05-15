const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('bands')
    .then((bands) => {
      res.send(bands)
    })
    .catch((err) => {
      next(err);
  });
});

router.get('/:id', (req, res) => {
  knex('bands')
    .where({
      id: req.params.id
    })
    .first()
    .then((band) => {
      res.send(band)
    })
    .catch((err) => {
      next(err);
    });
})

module.exports = router;
