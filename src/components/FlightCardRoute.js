import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ArrowSvg from "../images/card-arrow.svg";

function FlightCardRoute({ card }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{card.departure}</Text>
      <ArrowSvg height={8} width={12} style={styles.arrow}/>
      <Text style={styles.mainText}>{card.arrival}</Text>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  arrow: {
    marginHorizontal: 12,
  },
});

export default FlightCardRoute;
