import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import FavouritesScreen from './src/components/FavouritesScreen';
import FlightScreen from './src/components/FlightScreen';

export default function App() {
  useKeepAwake();
  const Stack = createStackNavigator();

  const [currentCard, setCurrentCard] = React.useState({});

  function handlePressCard(card) {
    setCurrentCard(card)
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
