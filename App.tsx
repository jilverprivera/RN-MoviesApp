import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigator/StackNavigator';
import {GradientProvider} from './src/context/contextGradient';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
