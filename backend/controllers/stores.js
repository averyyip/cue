const main = require('../main');

async function closestStores(req, res) {
  const { lon, lat } = req.query;
  const yelpStoreInfo = await main.stores.getClosestStores(lon, lat);
  res.json(yelpStoreInfo);
}

module.exports = {
  closestStores,
};
