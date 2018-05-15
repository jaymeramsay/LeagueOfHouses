const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.get('/', (req, res) => {
  knex('houses')
    .then((houses) => {
      res.send(houses)
    })
    .catch((err) => {
      next(err);
  });
});

router.get('/:id', (req, res) => {
  knex('houses')
    .where({
      id: req.params.id
    })
    .first()
    .then((house) => {
      res.send(house)
    })
    .catch((err) => {
      next(err);
    });
})

module.exports = router;
