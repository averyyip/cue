import React from 'react';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import { StyleSheet, View } from 'react-native';
import { CarouselCard } from '@components/CarouselCard';
import { Carousel } from '@components/Carousel';
import { Fonts } from './assets/fonts/Fonts';
import CarouselApp from './components/Carousel';

export default class App extends React.Component {
  async componentDidMount() {
    await this.setDefaultFont();
    this.setState({
      isLoaded: true,
    });
  }

  setDefaultFont = async () => {
    await Font.loadAsync(Fonts);
    const customTextProps = {
      style: { fontFamily: 'sf-pro-display-regular' },
    };
    setCustomText(customTextProps);
  };

  render() {
    const items = [
      CarouselCard('smallbusiness'),
      CarouselCard('berkeleybowl'),
      CarouselCard('wholefoods'),
    ];
    return (
      <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
