import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FlightsList from './FlightsList';
import Nav from './Nav';
import { LINK_BORDER_STYLE } from '../utils/constants';

function HomeScreen({ navigation, stateCards, loading }) {
  return (
    <View >
      <Nav navigation={navigation} browseBorderStyle={LINK_BORDER_STYLE} />
      <FlightsList navigation={navigation} cards={stateCards} loading={loading} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  stateCards: state.cards,
  loading: state.loading,
});

export default (connect(mapStateToProps))(HomeScreen);
