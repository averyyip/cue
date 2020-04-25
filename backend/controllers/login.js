const main = require('../main');

async function login(req, res) {
  const { username } = req.query;
  const userInfo = await main.login.getUser(username);
  res.json(userInfo);
}

async function register(req, res) {
  const { username } = req.query;
  let ok = false;
  try {
    ok = await main.login.register(username);
  } catch (e) {
    console.log(e);
  }
  res.json(ok);
}

module.exports = {
  login,
  register,
};
