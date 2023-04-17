import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreen} from './src/navigation/NavigationScreen';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  );
};

export default App;
