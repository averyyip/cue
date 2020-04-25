const yelp = require('yelp-fusion');
const env = require('../env');

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
      stores.push({
        name: yelpStoreInfo.name,
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

module.exports = {
  getClosestStores,
};
