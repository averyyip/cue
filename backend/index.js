const express = require('express');
const controllers = require('./controllers/index');

const app = express();

// Home page route.
app.get('/', (req, res) => {
  const result = controllers.testController.getTest(req, res);
  res.send(result);
});

app.get('/closestStores', (req, res) => {
  const result = controllers.yelpController.closestStores(req, res);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
