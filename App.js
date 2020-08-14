import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import Login from './src/pages/Login';
import Projects from './src/pages/Projects';

const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <>
        <StatusBar style="auto" />
        {/* <Login /> */}
        <Projects />
      </>
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
