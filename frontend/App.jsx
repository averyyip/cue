import React from 'react';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import { StyleSheet, View } from 'react-native';
import { CarouselCard } from '@components/CarouselCard';
import { Fonts } from './assets/fonts/Fonts';

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
    return (
      <View style={styles.container}>
        {CarouselCard('smallbusiness')}
      </View>
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
