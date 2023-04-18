import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationScreen} from './src/navigation/NavigationScreen';
import 'react-native-gesture-handler';
import {GradientProvider} from './src/context/GradientContext';
// import {FadeScreen} from './src/screens/FadeScreen';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationScreen />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
