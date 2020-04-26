import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/Maps';
import { ConfirmationScreen } from '../screens/Confirmation';
import { Countdown } from '../screens/Countdown';
import { DonationScreen } from '../screens/DonationScreen';
import { RatingScreen } from '../screens/RatingScreen';

const Stack = createStackNavigator();

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map" headerMode="none">
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Countdown" component={Countdown} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
