const mongoose = require('mongoose');

const User = new mongoose.Schema({
  uuid: String,
  username: String,
});

const Store = new mongoose.Schema({
  id: String,
  name: String,
  isLocalStore: Boolean,
  healthRatings: [{
    userUUID: String,
    rating: Number,
  }],
  waitlist: [
    { userUUID: String },
  ],
  location: {
    lon: Number,
    lat: Number,
    address: String,
  },
});

module.exports = {
  User,
  Store,
};
