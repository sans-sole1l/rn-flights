import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FlightCardPrice({ card }) {
  return (
    <View>
      <Text style={styles.price}>
        Price:  <Text style={styles.count}>{card.price}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    marginTop: 8,
    textAlign: "right",
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#878787',
  },
  count: {
    fontSize: 17,
    color: '#000',
    paddingLeft: 8,
  }, 
});

export default FlightCardPrice;
