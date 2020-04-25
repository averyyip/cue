import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { text } from '@screens/Maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});