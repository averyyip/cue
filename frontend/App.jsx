import React from 'react';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import { StyleSheet, View } from 'react-native';
import { Fonts } from './assets/fonts/Fonts';
import { AppContainer } from './components/Navigation';
import { ConfirmationScreen } from './screens/Confirmation';
import { MapScreen } from './screens/Maps';

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
    await Font.loadAsync(Fonts);
    const customTextProps = {
      style: { fontFamily: 'sf-pro-display-regular' },
    };
    await setCustomText(customTextProps);
  };

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return null;
    }
    return (
      <AppContainer />
    );
  }
}
