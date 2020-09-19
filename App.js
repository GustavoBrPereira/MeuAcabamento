// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaView, StatusBar} from 'react-native';
import Login from './src/pages/Login';
import Projects from './src/pages/Projects';
import Register from './src/pages/Register';
import NewProject from './src/pages/NewProject';

const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <>
        <StatusBar backgroundColor="#ff13a6" barStyle="light-content"/> 
        {/* <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}> */}

          {/* <Login /> */}
          {/* <Projects /> */}
          {/* <Register /> */}
          <NewProject />

        {/* </SafeAreaView> */}
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
