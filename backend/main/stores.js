const yelp = require('yelp-fusion');
const env = require('../env');
const db = require('../database/index');

const client = yelp.client(env.yelp_api_key);

async function getClosestStores(lon, lat) {
  const stores = [];
  const params = {
    term: 'grocery stores',
    longitude: lon,
    latitude: lat,
  };

  try {
    const resp = await client.search(params);
    resp.jsonBody.businesses.forEach((yelpStoreInfo) => {
      const address = `${yelpStoreInfo.location.address1}, ${yelpStoreInfo.location.city}, ${yelpStoreInfo.location.state} ${yelpStoreInfo.location.zip_code}`;
      const regex = RegExp('(safeway|walmart|trader|costco|albertson|whole foods|target|lucky)');
      const isLocalStore = !regex.test(yelpStoreInfo.name.toLowerCase());
      stores.push({
        id: yelpStoreInfo.id,
        name: yelpStoreInfo.name,
        isLocalStore,
        location: {
          ...yelpStoreInfo.coordinates,
          address,
        },
      });
    });
    return stores;
  } catch (e) {
    console.log(e);
  }
}

async function joinWaitlist(storeID, userUUID) {
  return db.joinWaitlist(storeID, userUUID);
}

module.exports = {
  getClosestStores,
  joinWaitlist,
};
