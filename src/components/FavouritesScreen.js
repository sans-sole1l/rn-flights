import React from 'react';
import { View } from 'react-native';
import { LINK_BORDER_STYLE } from '../utils/constants';
import FlightsList from './FlightsList';
import Nav from './Nav';

export default function FavouritesScreen({ navigation }) {
  return (
    <View >
      <Nav navigation={navigation} favBorderStyle={LINK_BORDER_STYLE} />
      <FlightsList />
    </View>
  );
}
