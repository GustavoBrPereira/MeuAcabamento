// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Routes from './src/routes';

const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // console.ignoredYellowBox = ['Warning: Failed'];

  if(fontsLoaded) {
    return (
      <Routes />
    );
  } else {
   return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
   );
  }
}
