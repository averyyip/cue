import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";

export default class Maps extends React.Component {
  // renderMarkers () {
  //   return this.props.places.map((place, i) =>
  //   (<Marker key={i} title={place.name} coordinate={place.coords} />))
  // }

  render() {
    return (
         <MapView
          style={{
            flex: 1
          }}
          provider="google"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
       >
         {/* {this.renderMarkers()} */}
       </MapView>
    );
  }
}

