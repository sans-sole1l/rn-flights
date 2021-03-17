import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { updateCurrentCard } from "../redux/actions";
import FlightCardRoute from "./FlightCardRoute";
import FlightCardDeparture from "./FlightCardDeparture";
import FlightCardPrice from "./FlightCardPrice";
import FlightCardImg from "./FlightCardImg";
import FlightCardLikeBtn from "./FlightCardLikeBtn";

function FlightCard({ card, isLast, setCurrentCard, navigation }) {
  const lastChildStyle = isLast && {marginBottom: 20};

  function handlePress() {
    setCurrentCard(card);
    navigation.navigate('Flight');
  }

  return (
    <TouchableOpacity 
      style={[styles.card, styles.boxShadow, lastChildStyle]}
      onPress={handlePress}
    >
      <View style={styles.row}>
        <FlightCardImg />
        <View style={styles.column}>
          <FlightCardRoute card={card} />
          <FlightCardDeparture card={card} />
        </View>
        <FlightCardLikeBtn card={card} />
      </View>
      <FlightCardPrice card={card}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  boxShadow: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  column: {
    flex: 1,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 15,
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(196, 196, 196, 0.5)',
  },
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCard: item => dispatch(updateCurrentCard(item)),
});

export default (connect(null, mapDispatchToProps))(FlightCard);
