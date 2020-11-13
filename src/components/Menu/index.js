import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from  '@react-navigation/native';

import metrics from '../../styles/metrics';

export default function Menu({ title, icon }) {
    const navigation = useNavigation();

    return(
        <View style={styles.menu}>
            <BorderlessButton onPress={navigation.goBack}>
                <MaterialIcons name={icon} size={40} color="#FFF"/>
            </BorderlessButton>

            <Text style={styles.textMenu}> {title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 80,
        
        backgroundColor: metrics.colorPink,
        
        flexDirection: 'row',
        
        paddingHorizontal: 15,
        paddingTop: metrics.paddingTopMenu,
        
        justifyContent: 'space-between',
        
        alignItems: 'center',
    },

    textMenu: {
        flex: 1,
        
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeTitle,
        color: '#FFF',
        
        textAlign: 'left',
        
        marginHorizontal: 10,
    },
})