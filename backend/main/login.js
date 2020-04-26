const db = require('../database/index');

function getUser(username) {
  return db.getUser(username);
}

function register(username) {
  return db.createUser(username);
}

module.exports = {
  getUser,
  register,
};
