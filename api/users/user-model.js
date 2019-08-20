const db = require('../../data/db-config.js');

module.exports = {
  getUsers,
};

function getUsers() {
  return db('users');
}
