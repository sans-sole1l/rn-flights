import React from "react";
import { View, StyleSheet } from "react-native";
import PlaneSvg from "../images/plane.svg";

function FlightCardImg() {
  return (
    <View style={styles.container}>
      <PlaneSvg height={33} width={33}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlightCardImg;
