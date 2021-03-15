import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ArrowSvg from '../images/arrow.svg'

export default function FlightRoute({ card }) {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.text}>{card.date}</Text>
        <Text style={styles.mainText}>{card.departurePort}</Text>
        <Text style={styles.text}>{card.departure}</Text>
      </View>
      <ArrowSvg height={17} width={9} style={styles.arrow}/>
      <View style={styles.column}>
        <Text style={styles.text}>{card.time}</Text>
        <Text style={styles.mainText}>{card.arrivalPort}</Text>
        <Text style={styles.text}>{card.arrival}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    maxWidth: 315,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    maxWidth: 120,
    width: '100%'
  },
  text: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#878787',
  },
  mainText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -0.4,
    color: '#404040',
    marginVertical: 5,
  },
});
