import React from 'react';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import { StyleSheet, View, Text } from 'react-native';
import { Fonts } from '../assets/fonts/Fonts';
import CarouselApp from '@components/Carousel';
import { CarouselCard } from '@components/CarouselCard'
import Map from '@components/Map'


export default class HomeMap extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }

  async componentDidMount() {
    await this.setState({
      isLoaded: true,
    });
  }

  render() {
    const { isLoaded } = this.state;
    const items = [
        CarouselCard('smallbusiness'),
        CarouselCard('berkeleybowl'),
        CarouselCard('wholefoods'),
    ]

    if (!isLoaded) {
      return null;
    }
    return (
      <View>
        <Map/>
        <CarouselApp
            carouselItems={items}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const map = StyleSheet.create({
    container: {
      height: '50%'
    },
  });

const carousel = StyleSheet.create({
    container: {
      height: '25%'
    },
  });
