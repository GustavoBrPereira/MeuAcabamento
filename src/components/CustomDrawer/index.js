import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import registerImg from '../../assets/registerImg.png';
import { useNavigation } from '@react-navigation/native';
import metrics from '../../styles/metrics';

export default function CustomDrawer(props) {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props} >
                <TouchableOpacity style={styles.userArea} onPress={() => navigation.navigate("UserAccount")} >
                    <Image style={styles.userImg} source={registerImg} />

                    <View style={styles.userInfos}>
                        <Text style={styles.userName}>Gustavo Brito </Text>
                        <Text style={styles.userEmail}>gustavobrito@email.com </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.userArea}>
                    <Text style={styles.projects}> <Text style={styles.projects, {}}>15</Text> Romaneios </Text>
                </View>
            
            </DrawerContentScrollView>

            <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('Login')} >
                
                <MaterialIcons name="exit-to-app" size={30} color="#000" />
                <Text style={styles.footerText}>Sign Out</Text>
                
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },

    userArea: {
        flexDirection: 'row', 

        marginTop: '2%',
        marginLeft: '1%',
        marginBottom: '2%',
    },

    userImg: {
        width: 80,
        height: 80,

        borderRadius: 40,
    },

    userInfos: {
        flexDirection: 'column',

        marginLeft: 5,
        
        justifyContent: 'center',
    },

    userName: {
        fontSize: metrics.fontSizeMedium,
        fontWeight: "700",
    },

    userEmail: {
        fontSize: metrics.fontSizeSmall,
    },

    projects: {
        fontSize: metrics.fontSizeSmall,
    },

    footer: {
        flexDirection: 'row',

        marginLeft: '3%',
        marginBottom: '5%',
    },

    footerText: {
        fontSize: metrics.fontSizeBig,
        marginLeft: 10,
    },
})