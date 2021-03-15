import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function LinkBtn({ title, navigation, borderStyle }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(title)}>
      <View style={[styles.container, borderStyle]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 7,
    height: 30,
    width: 148,
  },
  text: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 22,
    color: '#000',
  },
});
