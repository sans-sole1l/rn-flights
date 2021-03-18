import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DashSvg from "../images/dash.svg"

function FlightCardDeparture({ card }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{card.departurePort}</Text>
        <DashSvg height={1} width={9} style={styles.dash}/>
        <Text style={styles.text}>{card.date}</Text>
        <DashSvg height={1} width={9} style={styles.dash}/>
        <Text style={styles.text}>{card.time}</Text>
      </View>
      <Text style={styles.text}>{card.airlines}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#878787',
  },
  dash: {
    marginHorizontal: 5,
  },
});

export default FlightCardDeparture;
