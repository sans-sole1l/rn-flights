import React from 'react';
import { TouchableOpacity } from 'react-native';
import LikeSvg from '../images/favbtn.svg';
import LikeSvgActive from '../images/favbtn-active.svg';

export default function FlightCardLikeBtn({ card }) {
  return (
    <TouchableOpacity>
      {card.isLiked ? <LikeSvgActive height={15} width={17}/> : <LikeSvg height={15} width={17}/>}
    </TouchableOpacity>
  );
}
