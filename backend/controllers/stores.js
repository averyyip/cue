const main = require('../main');
const db = require('../database/index');


async function closestStores(req, res) {
  const { lon, lat } = req.query;
  const stores = await main.stores.getClosestStores(lon, lat);
  const promises = stores.map(async (store) => {
    let storeInfo = await db.getStore(store.id);
    if (storeInfo == null) {
      await db.addStore(store);
    }
    storeInfo = await db.getStore(store.id);
    return {
      ...store,
      isLocalStore: storeInfo.isLocalStore,
      healthRatings: storeInfo.healthRatings,
      waitlist: storeInfo.waitlist,
    };
  });
  const latestStores = await Promise.all(promises);
  res.json(latestStores);
}

async function joinWaitlist(req, res) {
  const { storeID, userUUID } = req.query;
  const ok = await main.stores.joinWaitlist(storeID, userUUID);
  res.json(ok);
}

async function rateStore(req, res) {
  const { storeID, userUUID, rating } = req.query;
  const ok = await main.stores.joinWaitlist(storeID, userUUID, rating);
  res.json(ok);
}

module.exports = {
  closestStores,
  joinWaitlist,
  rateStore,
};
