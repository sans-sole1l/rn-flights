import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinkBtn from './LinkBtn';

export default function Nav({ navigation, favBorderStyle, browseBorderStyle }) {
  return (
    <View style={styles.container}>
      <LinkBtn title='Favourites' navigation={navigation} borderStyle={favBorderStyle} />
      <LinkBtn title='Browse' navigation={navigation} borderStyle={browseBorderStyle} />
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
    borderColor: 'rgba(0, 0, 0, 0.15)',
    backgroundColor: '#fff',
  },
});
