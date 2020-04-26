import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import StoreMarker from '@components/StoreMarker';
import axios from 'axios';
import StoreInfo from '@components/StoreInfo';
import BottomCardContainer from './BottomCardContainer';
import * as BottomButton from '@components/BottomButton';
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
    longitude: Number,
    latitude: Number,
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
  }

    async componentWillMount() {
    //   this.setState ({
    //     stores: await this.getClosestStores()
    //   })
        this.setState({
            stores: await this.getClosestStores(-122.0325472123455, 37.321996988)
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

    this.setState({
        focusStore: store
    })
    //animate to a new region of the map
    const region = {
      latitude: store.location.latitude,
      longitute: store.location.longitude,
      ...deltas
        };
    // this.setState(
    //     {store,}, async () => {
    //     await this._map.animateToRegion(region, 1000);
    //     }
    // )
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
                key={store.id}
                coordinate={{
                  latitude: store.location.latitude,
                  longitude: store.location.longitude,
                }}
                onPress={() => this.changeCurrentStore(store)}
                >
                <StoreMarker
                   storeName={store.name}
                  focused={store.isLocalStore}
                   type={this.state.isLocalStore}
                />
              </Marker>
            ))
          }
        </MapView>
        <BottomCardContainer style={bottomStyles.container}
            storeRecord={(this.state.focusStore != null) ?  this.state.focusStore : "carousel"}>
        </BottomCardContainer>
      </View>
    )
  }}
    
const styles = StyleSheet.create({
  container: {
    flex: 2,
    // width: '100%'
  },
});

const bottomStyles = StyleSheet.create({
    container: {
      flex: 1,
      // width: '100%'
    },
  });