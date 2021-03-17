import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleAddFavCard, handleRemoveFavCard } from "../redux/actions";
import LikeSvg from '../images/favbtn.svg';
import LikeSvgActive from '../images/favbtn-active.svg';

function FlightCardLikeBtn({ card, positionStyle, addFavCardToStore, removeFavStoreCard }) {
  function handlePressLike() {
    card.isLiked ? removeFavStoreCard(card) : addFavCardToStore(card);
  }

  return (
    <TouchableOpacity style={[styles.container, positionStyle]} onPress={handlePressLike}>
      {card.isLiked ? <LikeSvgActive /> : <LikeSvg />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 18,
    width: 20,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addFavCardToStore: item => dispatch(handleAddFavCard(item)),
  removeFavStoreCard: item => dispatch(handleRemoveFavCard(item)),
});

export default (connect(null, mapDispatchToProps))(FlightCardLikeBtn);
