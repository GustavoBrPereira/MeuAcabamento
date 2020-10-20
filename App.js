// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Projects from './src/pages/Projects';
import NewProject from './src/pages/NewProject';
import Register from './src/pages/Register';
import Invoice from './src/pages/Invoice';
import Drawer from './src/pages/Drawer';
import UserAccount from './src/pages/UserAccount';

const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
});

const Stack = createStackNavigator();



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <>
        <NavigationContainer>

        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          
          <Stack.Screen name="UserAccount" component={UserAccount} />
          
          <Stack.Screen name="Projects" component={Projects} />
          <Stack.Screen name="NewProject" component={NewProject} />
          <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>

        </NavigationContainer>
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
