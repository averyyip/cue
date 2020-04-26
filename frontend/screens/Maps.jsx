import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import StoreMarker from '@components/StoreMarker';
import axios from 'axios';
import BottomCardContainer from '@components/BottomCardContainer';
import { getLocation } from '@utils/location';
import WaitlistCard from '@components/WaitlistCard';

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
  latitude: 37.785834,
  longitude: -122.406417,
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0221,
};

const deltas = {
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0221,
};


export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      region,
      stores: [],
      store: {
        focused: false,
      },
    };
  }

  async componentWillMount() {
    const regionLatLon = await getLocation();
    this.setState({
      region: {
        ...regionLatLon,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      },
      stores: await this.getClosestStores(regionLatLon.longitude, regionLatLon.latitude),
    });
  }

  async getClosestStores(longitude, latitude) {
    try {
      const response = await axios.get('https://hacknow-bp.uc.r.appspot.com/closestStores', {
        params: {
          lon: longitude,
          lat: latitude,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  changeCurrentStore(store) {
    this.state.store.focused = false;
    store.focused = true;

    this.setState({
      focusStore: store,
    });
    // animate to a new region of the map
    // this.setState({
    //   region: {
    //     latitude: store.location.latitude,
    //     longitute: store.location.longitude,
    //     ...deltas,
    //   }
    // });

    // this.setState(
    //     {store,}, async () => {
    //     await this._map.animateToRegion(region, 1000);
    //     }
    // )
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  };

  render() {
    console.log(this.state.region);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          provider="google"
          region={this.state.region}
          tracksViewChanges={false}
        //   onRegionChangeComplete={this.onRegionChangeComplete}
          ref={(mapView) => { _map = mapView; }}
        >
          {
            this.state.stores.map((store) => (
              <Marker
                key={store.id}
                coordinate={{
                  latitude: store.location.latitude,
                  longitude: store.location.longitude,
                }}
                tracksViewChanges={false}
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
        {/* <WaitlistCard /> */}
        {(this.waitlisted)
          ? <WaitlistCard />
          : (
            <BottomCardContainer
              style={bottomStyles.container}
              storeRecord={(this.state.focusStore != null) ? this.state.focusStore : 'carousel'}
            />
          )}
      </View>
    );
  }
}

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
