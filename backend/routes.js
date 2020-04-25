const express = require('express');
const controllers = require('./controllers/index');

const router = express.Router();

// Home page route.
router.get('/', (req, res) => {
  const result = controllers.testController.getTest(req, res);
  res.send(result);
});
