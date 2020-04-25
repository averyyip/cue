const yelp = require('yelp-fusion');
const env = require('../env');

const client = yelp.client(env.yelp_api_key);

async function getClosestStore(lon, lat) {
  const params = {
    term: 'grocery stores',
    longitude: lon,
    latitude: lat,
  };

  try {
    const res = await client.search(params);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
getClosestStore(-122.2540443, 37.870456);
