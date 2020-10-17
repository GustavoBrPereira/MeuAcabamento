import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Projects from '../../pages/Projects';
import CustomDrawer from '../../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return(
        <Drawer.Navigator 
            initialRouteName="Romaneios" 
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Romaneios" component={Projects} />
        </Drawer.Navigator> 
    );
}

export default MyDrawer;