const express = require('express');

const Users = require('./user-model.js');

const router = express.Router();

/* GET ALL USERS */
router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json({ users: users });
    })
    .catch(error => {
      res.status(500).json({
        error:
          'An error occurred during fetching all users. That one is on us! ' +
          error,
      });
    });
});

module.exports = router;
