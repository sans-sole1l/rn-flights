import { StatusBar } from 'expo-status-bar';
import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/index';
import FlightsList from './src/components/FlightsList';
import Header from './src/components/Header';
import Nav from './src/components/Nav';
import { flightCards } from './src/utils/data';

export default function App() {
  useKeepAwake();

  return (
    <Provider store={store}>
      <View >
        <Header />
        <Nav />
        <FlightsList cards={flightCards} />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
