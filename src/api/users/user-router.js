const express = require('express');

const dbUsers = require('./user-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  dbUsers
    .getUsers()
    .then(users => {
      res.status(200).json({ users: users });
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

module.exports = router;
