import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../screens/Maps';
import { ConfirmationScreen } from '../screens/Confirmation';

const Stack = createStackNavigator();

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Confirmation" headerMode="none">
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
