const mongoose = require('mongoose');
const schema = require('./schema.js');
const env = require('../env');

const connectionString = `mongodb+srv://hacknowbp:${env.mongodb_password}@hacknowbp-fmbpb.gcp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectionString, { useNewUrlParser: true });
const db = mongoose.connection;

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });


// // Users
// const User = mongoose.model('user', schema.userSchema, 'user');

// async function createUser(username) {
//   return new User({
//     username,
//     created: Date.now(),
//   }).save();
// }

// async function findUser(username) {
//   return User.findOne({ username });
// }

// (async () => {
//   const connector = mongoose.connect(connectionString);
//   const username = process.argv[2].split('=')[1];

//   let user = await connector.then(async () => findUser(username));

//   if (!user) {
//     user = await createUser(username);
//   }

//   console.log(user);
//   process.exit(0);
// })();
