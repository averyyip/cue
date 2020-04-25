import axios from 'axios'

const YELP_API_KEY = 'IgUURxNKx7kE6A0VDBzhX70JiZyI2pNKz7Tl5nQak421aNngNIpAF8hLMzRBweWFQbgWemLmbkkSZDemwzm166egQFu1XQCkMeHVnTKJwIm9K1XImLXslhkP12qkXnYx'

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
})

const getCoffeeShops = userLocation => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'coffee,coffeeroasteries,coffeeshops',
        ...userLocation,
      },
    })
    .then(res =>
      res.data.businesses.map(business => {
        return {
          name: business.name,
          coords: business.coordinates,
        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getCoffeeShops,
}