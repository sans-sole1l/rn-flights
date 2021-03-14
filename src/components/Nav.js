import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinkBtn from './LinkBtn';

export default function Nav() {
  return (
    <View style={styles.container}>
      <LinkBtn title='Favourites' />
      <LinkBtn title='Browse' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 46,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
});
