import React from 'react';
import { FlatList, StyleSheet, Image } from 'react-native';

export default function Carousel({ images }) {
  return (
    <FlatList
      style={styles.container}
      data={images}
      renderItem={
        ({ item }) => <Image source={item.link} style={styles.img} key={item._id}/>
      }
      keyExtractor={item => item._id.toString()}
      initialNumToRender={8}
      maxToRenderPerBatch={2}
      onEndReachedThreshold={0.5}
      horizontal={true}
    />
  )
}

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 200,
  },
  container: {
    maxWidth: 315,
    width: '100%',
    marginTop: 25,
    marginBottom: 35,
    overflow: 'visible',
  },
})
