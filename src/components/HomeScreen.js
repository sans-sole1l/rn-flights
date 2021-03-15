import React from 'react';
import { View } from 'react-native';
import FlightsList from './FlightsList';
import Nav from './Nav';
import { flightCards } from '../utils/data';
import { LINK_BORDER_STYLE } from '../utils/constants';

export default function HomeScreen({ navigation }) {
  return (
    <View >
      <Nav navigation={navigation} browseBorderStyle={LINK_BORDER_STYLE} />
      <FlightsList cards={flightCards} navigation={navigation} />
    </View>
  );
}
