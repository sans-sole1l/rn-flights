import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { images } from '../utils/data';
import Carousel from './Carousel';
import FlightCardLikeBtn from './FlightCardLikeBtn';
import FlightInfo from './FlightInfo';
import FlightRoute from './FlightRoute';

export default function FlightScreen({ navigation }) {
  const card = {
    departure: 'Moscow',
    arrival: 'New York',
    date: '28 June, 2020',
    time: '14:50',
    airlines: 'Aeroflot',
    price: '23 924 ₽',
    _id: 9,
    departurePort: 'VKO',
    arrivalPort: 'JFK',
    boarding: '19:20',
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={require('../images/main-flight.png')} style={styles.mainImg}/>
      <View style={styles.container}>
        <FlightCardLikeBtn card={card} positionStyle={styles.posAbsolute} />
        <FlightRoute card={card} />
        <FlightInfo card={card} />
        <Carousel images={images}/>
      </View>
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
    height: 430,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'relative',
    top: '-5%',
    left: 0,
  },
  posAbsolute: {
    position: 'absolute',
    top: 25,
    right: 25,
    width: 20,
    height: 17,
  },
});
