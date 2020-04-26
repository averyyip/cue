import * as Location from 'expo-location';

async function getLocation() {
  const { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Location denied');
  }
  const { coords } = await Location.getCurrentPositionAsync({});
  console.log(coords);
  return { longitude: coords.longitude, latitude: coords.latitude };
}

module.exports = {
  getLocation,
};
