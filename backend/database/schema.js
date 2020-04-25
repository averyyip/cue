const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
});

const Store = new mongoose.Schema({
  id: String,
  name: String,
  healthRating: Number,
  waitLength: Number,
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
