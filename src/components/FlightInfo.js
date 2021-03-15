import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SeparatorSvg from '../images/separator.svg'

export default function FlightInfo({ card }) {
  return (
    <View style={[styles.row, styles.boxShadow]}>
      <View style={styles.column}>
        <Text style={styles.text}>Price</Text>
        <Text style={styles.mainText}>{card.price}</Text>
      </View>
      <SeparatorSvg height={50} width={1} style={styles.separator}/>
      <View style={styles.column}>
        <Text style={styles.text}>Boarding</Text>
        <Text style={styles.mainText}>14:00</Text>
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
    paddingHorizontal: 30,
    paddingVertical: 16,
    marginTop: 17,
    backgroundColor: '#1157A7',
    borderRadius: 10,
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
    color: '#fff',
  },
  mainText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#fff',
  },
  boxShadow: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
});
