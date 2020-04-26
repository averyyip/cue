import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import StoreMarker from '@components/StoreMarker';
import axios from 'axios';
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
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0221
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
      stores: [],
      store: {
        focused:false,
      },
    }
    console.log("bleeeeeeehehh")
    console.log(this.state)
  }

    async componentWillMount() {
    //   this.setState ({
    //     stores: await this.getClosestStores()
    //   })
    await this.setState({stores: this.getClosestStores(-122.0325472123455, 37.321996988)
            // [{id: 1,
            //     name: "store1",
            //     isLocalStore: true,
            //     healthRatings: [{
            //         userUUID: 1,
            //         rating: 2,
            //     }],
            //     waitlist: [
            //     { userUUID: 1 },
            //     ],
            //     location: {
            //     lat: 37.321996988,
            //     lon: -122.0325472123455,
            //     address: "123 he", }
            // }, {id: 1,
            //     name: "store",
            //     isLocalStore: true,
            //     healthRatings: [{
            //         userUUID: 1,
            //         rating: 2,
            //     }],
            //     waitlist: [
            //     { userUUID: 1 },
            //     ],
            //     location: {
            //     lat: 37.421996988,
            //     lon: -122.0325472123455,
            //     address: "123 he", }
            // }]}
        })

    }

  async getClosestStores(longitude, latitude) {
    try {
      const response = await axios.get('https://hacknow-bp.uc.r.appspot.com/closestStores', {
          params: {
              lon: longitude,
              lat: latitude
          }
      });
      console.log(response.data)
      return response.data;
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
    console.log("bleeeeeeehehh")
    console.log(this.state.stores)
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          provider="google"
          region={region}
        //   onRegionChangeComplete={this.onRegionChangeComplete}
            ref = {(mapView) => { _map = mapView;}}
        >
          {
            this.state.stores.map(store => (
              <Marker
                key='hello'
                coordinate={{
                  latitude: store.location.latitude,
                  longitude: store.location.longitude,
                }}
                onPress={() => this.changeCurrentStore(store)}>
                <StoreMarker
                   storeName={store.name}
                  focused={!this.state.store.focused}
                   type={this.state.stores[0].isLocal}
                />
              </Marker>
            ))
          }
        </MapView>
      </View>
    )
  }}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});