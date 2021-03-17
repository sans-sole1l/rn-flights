import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FavouritesScreen from './FavouritesScreen';
import FlightScreen from './FlightScreen';
import { fetchSearchCards } from '../redux/actions/index';

function Main({ searchCards }) {
  const Stack = createStackNavigator();

  React.useEffect(() => {
    searchCards();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Browse"
        screenOptions={{ 
          title: 'Flights',
          headerBackTitle: 'Back',
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
      >
        <Stack.Screen name="Browse" component={HomeScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen
          name="Flight"
          component={FlightScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchCards: () => dispatch(fetchSearchCards()),
});

export default (connect(null, mapDispatchToProps))(Main);
