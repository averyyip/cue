import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import StoreMarker from '@components/StoreMarker';
// import Main from './backend/controllers/index';

/**
const Store = new mongoose.Schema({
  id: String,
  name: String,
  isLocalStore: Boolean,
  healthRatings: [{
    userUUID: String,
    rating: Number,
  }],
  waitlist: [
    { userUUID: String },
  ],
  location: {
    lon: Number,
    lat: Number,
    address: String,
  },
});
*/

const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}



export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      region: {region},
      stores: null,
      store: {
        focused:false,
      },
    }
  }

  async componentWillMount() {
    //   this.setState ({
    //     stores: await this.getClosestStores()
    //   })
    this.setState(
        {stores: 
            [{id: 1,
                name: "String",
                isLocalStore: true,
                healthRatings: [{
                userUUID: 1,
                rating: 2,
                }],
                waitlist: [
                { userUUID: 1 },
                ],
                location: {
                lon: 37.321996988,
                lat: -122.0325472123455,
                address: "123 he", }
            }]}
        )
        }

  async getClosestStores() {
    try {
      const response = await axios.get('https://hacknow-bp.uc.r.appspot.com/closestStores', {
          params: {
              lon: -122.0325472123455,
              lat: 37.321996988
          }
      });
      console.log(response);
      return response.body;
    } catch (error) {
      console.error(error);
    }}

  changeCurrentStore(store) {
    this.state.store.focused = false;
    store.focused = true;

    //animate to a new region of the map
    const region = {
      latitude: store.location.lat,
      longitute: store.location.lon,
      ...deltas
        };
    this.setState({
        store,
        }, async () => {
        await this._mapView.animateToRegion(region, 1000);
        })
    }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  render() {
    // let coords = null;
    // if (this.state.location) {
    //   coords = this.state.location.coords;
    // }
    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          provider="google"
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
           ref = {(mapView) => { _map = mapView;}}
        >
          {/* {
            this.state.stores.map(store => (
              <Marker
                key='hello'
                coordinate={{
                  latitude: store.location.lat,
                  longitude: store.location.lon,
                }}
                onPress={() => this.changeCurrentStore(store)}>
                <StoreMarker
                  storeName={store.name}
                  focused={!this.state.store.focused}
                  type={store.isLocal}
                />
              </Marker>
            ))
          } */}
        </MapView>
      </View>
    )
  }}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});