import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {MovieScreen} from '../screens/MovieScreen';
import {Movie} from '../interface/movieInterface';

export type RouteStackParams = {
  HomeScreen: undefined;
  MovieScreen: Movie;
};

const Stack = createStackNavigator<RouteStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
