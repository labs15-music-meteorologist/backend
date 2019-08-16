const db = require('../../data/dbConfig.js');

module.exports = {
  getUsers,
};

function getUsers() {
  return db('users');
}
