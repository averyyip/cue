const express = require('express');
const controllers = require('./controllers/index');

const app = express();

// Home page route.
app.get('/', (req, res) => {
  const result = controllers.testController.getTest(req, res);
  res.send(result);
});

app.get('/closestStores', (req, res) => {
  controllers.storesController.closestStores(req, res);
});

app.post('/joinWaitlist', (req, res) => {
  console.log('Processing joinWaitlist');
  controllers.storesController.joinWaitlist(req, res);
});

app.get('/login', (req, res) => {
  controllers.loginController.login(req, res);
});

app.post('/register', (req, res) => {
  console.log('Processing register');
  controllers.loginController.register(req, res);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
