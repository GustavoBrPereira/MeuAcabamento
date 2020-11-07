import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject';
import Register from './pages/Register';
import Invoice from './pages/Invoice';
import Drawer from './pages/Drawer';
import UserAccount from './pages/UserAccount';

const Stack = createStackNavigator();

export default function Routes() {
    return(
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
    );
}