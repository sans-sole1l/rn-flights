import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addFavCard, removeFavCard } from "../redux/actions";
import LikeSvg from '../images/favbtn.svg';
import LikeSvgActive from '../images/favbtn-active.svg';

function FlightCardLikeBtn({ card, positionStyle, addFavCardToStore, removeFavStoreCard }) {
  function handlePressLike() {
    card.isLiked ? 
    removeFavStoreCard({...card, isLiked: false}) :
    addFavCardToStore({...card, isLiked: true});
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
  addFavCardToStore: item => dispatch(addFavCard(item)),
  removeFavStoreCard: item => dispatch(removeFavCard(item)),
});

export default (connect(null, mapDispatchToProps))(FlightCardLikeBtn);
