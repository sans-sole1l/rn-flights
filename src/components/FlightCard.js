import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { fetchAddFavCard, fetchRemoveFavCard } from "../actions";
import FlightCardRoute from "./FlightCardRoute";
import FlightCardDeparture from "./FlightCardDeparture";
import FlightCardPrice from "./FlightCardPrice";
import FlightCardImg from "./FlightCardImg";
import FlightCardLikeBtn from "./FlightCardLikeBtn";

function FlightCard({ card, isLast, removeFavStoreCard, addFavCardToStore }) {
  const lastChildStyle = isLast && {marginBottom: 20};

  function handleClick() {
    card.isMarked ? removeFavStoreCard(card) : addFavCardToStore(card);
  }

  return (
    <View style={[styles.card, styles.boxShadow, lastChildStyle]}>
      <View style={styles.row}>
        <FlightCardImg />
        <View style={styles.column}> 
          <FlightCardRoute card={card} />
          <FlightCardDeparture card={card} />
        </View>
        <FlightCardLikeBtn card={card}/>
      </View>
      <FlightCardPrice card={card}/>
    </View>
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
  addFavCardToStore: item => dispatch(fetchAddFavCard(item)),
  removeFavStoreCard: item => dispatch(fetchRemoveFavCard(item)),
});

export default (connect(null, mapDispatchToProps))(FlightCard);
