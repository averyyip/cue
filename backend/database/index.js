const mongoose = require('mongoose');
const schema = require('./schema.js');
const env = require('../env');

const connectionString = `mongodb+srv://${env.mongo_username}:${env.mongo_password}@hacknowbp-fmbpb.gcp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;


// User
const UserModel = mongoose.model('User', schema.User); // create and access the model User
function createUser(user) {
  const newUser = new UserModel(user);
  newUser.save((err) => {
    if (err) console.log(err);
  });
}

function getUser(username) {
  return UserModel.findOne({ username });
}

// User
const StoreModel = mongoose.model('Store', schema.Store); // create and access the model User
function addStore(store) {
  const newStore = new UserModel(store);
  newStore.save((err) => {
    if (err) console.log(err);
  });
}

function getStore(id) {
  return StoreModel.findOne({ id });
}


module.exports = {
  createUser,
  getUser,
  addStore,
  getStore,
};
