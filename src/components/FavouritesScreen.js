import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { LINK_BORDER_STYLE } from '../utils/constants';
import FlightsList from './FlightsList';
import Nav from './Nav';

function FavouritesScreen({ navigation, stateFavCards, loading }) {
  return (
    <View >
      <Nav navigation={navigation} favBorderStyle={LINK_BORDER_STYLE} />
      <FlightsList navigation={navigation} cards={stateFavCards} loading={loading} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  stateFavCards: state.favCards,
  loading: state.loading,
});

export default (connect(mapStateToProps))(FavouritesScreen);
