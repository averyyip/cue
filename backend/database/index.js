const mongoose = require('mongoose');
const _ = require('lodash');
const schema = require('./schema.js');
const env = require('../env');

const connectionString = `mongodb+srv://${env.mongo_username}:${env.mongo_password}@hacknowbp-fmbpb.gcp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;


// User
const UserModel = mongoose.model('User', schema.User); // create and access the model User

async function createUser(username) {
  if (await getUser(username) !== null) {
    return false;
  }
  const newUser = new UserModel({ username });
  newUser.save((err) => {
    if (err) console.log(err);
  });
  return true;
}

function getUser(username) {
  return UserModel.findOne({ username });
}

// Store
const StoreModel = mongoose.model('Store', schema.Store); // create and access the model User
function addStore(store) {
  const newStore = new StoreModel(store);
  newStore.save((err) => {
    if (err) console.log(err);
  });
}

function getStore(id) {
  return StoreModel.findOne({ id });
}

async function rateStore(storeID, userUUID, rating) {
  const store = await getStore(storeID);
  const idx = _.findIndex(store.healthRatings, (healthRating) => healthRating.userUUID === userUUID);
  if (idx === -1) {
    store.healthRatings.push({ userUUID, rating });
  } else {
    store.healthRatings[idx].rating = rating;
  }
  store.save();
  return true;
}

async function joinWaitlist(storeID, userUUID) {
  const store = await getStore(storeID);
  const idx = _.findIndex(store.waitlist, (user) => user.userUUID === userUUID);
  if (idx === -1) {
    store.waitlist.push({ userUUID });
    store.save();
    return true;
  }
  return false;
}

async function leaveWaitlist(storeID, userUUID) {
  console.log(storeID, userUUID);
  const store = await getStore(storeID);
  console.log(store.waitlist);
  store.waitlist = store.waitlist.filter((user) => user.userUUID !== userUUID);
  // console.log(store.waitlist);
  store.save();
  return true;
}

module.exports = {
  createUser,
  getUser,
  addStore,
  getStore,
  leaveWaitlist,
  rateStore,
  joinWaitlist,
};
