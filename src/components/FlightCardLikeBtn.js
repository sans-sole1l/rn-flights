import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LikeSvg from '../images/favbtn.svg';
import LikeSvgActive from '../images/favbtn-active.svg';

export default function FlightCardLikeBtn({ card, positionStyle }) {
  return (
    <TouchableOpacity style={[styles.container, positionStyle]}>
      {card.isLiked ? <LikeSvgActive /> : <LikeSvg />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 15,
    width: 17,
  },
});
