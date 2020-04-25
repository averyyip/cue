import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import StoreMarker from '@components/StoreMarker';

/**
  storeName: string,
	healthRating: int,
	waitLength: int,
	location: {
		lon: int,
		lat: int,
		address:,
		}
  }
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

  changeCurrentStore() {
    this.state.store.focused = false;
    // store.focused = true;

    //animate to a new region of the map
    const region = {
      latitude: store.latitude,
      longitute: store.longitude,
      ...deltas
    };
    this.setState({
      store,
    }, async () => {
      if (resetSheet) {
        this.bottonSheetRef.snapTo(0);
      }
      await this._mapView.animateToRegion(region, 1000);
    }
    )
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  render() {
    let coords = null;
    if (this.state.location) {
      coords = this.state.location.coords;
    }
    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          provider="google"
          region={region}
          ref = {()}
        >
          {
            // this.state.stores.map(store => (
            <>
              <Marker
                key='hello'
                coordinate={{
                  // latitude: store.latitude,
                  // longitude: store.longitude,
                  latitude: 37.321996988,
                  longitude: -122.0325472123455,
                }}
                onPress={() => this.changeCurrentStore()}>
                <StoreMarker
                  storeName='hello'
                  focused={!this.state.store.focused}
                />
              </Marker>
              <Marker
                key='bye'
                coordinate={{
                  // latitude: store.latitude,
                  // longitude: store.longitude,
                  latitude: 37.311996988,
                  longitude: -122.0325472123455,
                }}
                onPress={() => _mapView.animateToCoordinate({
                    latitude: 37.32,
                    longitude: -122.0325472123455
                }, 1000)}>
                <StoreMarker
                  storeName='bye'
                  focused={this.state.store.focused}
                />
              </Marker>
            </>
            // ))
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