import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux'
import FlightCard from './FlightCard';

function FlightsList({ cards, navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={
          ({item, index}) => {
            return <FlightCard 
              card={item} 
              key={item._id} 
              isLast={index === cards.length - 1} 
              navigation={navigation}
            />
          }
        }
        keyExtractor={item => item._id.toString()}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#F8F8F8',
    width: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    paddingBottom: 70,
  }
});

const mapStateToProps = (state) => ({
  stateCards: state.cardsData,
  loading: state.loading,
});

export default (connect(mapStateToProps))(FlightsList);
