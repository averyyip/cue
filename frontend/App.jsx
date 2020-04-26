import React from 'react';
import * as Font from 'expo-font';
import { Fonts } from './assets/fonts/Fonts';
import { setCustomText } from 'react-native-global-props';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }

  async componentDidMount() {
    // await this.setDefaultFont();
    await this.setState({
      isLoaded: true,
    });
  }

  setDefaultFont = async () => {
    // await Font.loadAsync(Fonts);
    const customTextProps = {
      style: { fontFamily: 'sf-pro-display-regular' },
    };
    setCustomText(customTextProps);
  };

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return null;
    }
    return (
      <View />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
