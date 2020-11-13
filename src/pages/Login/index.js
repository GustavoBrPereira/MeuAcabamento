import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StatusBar, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../assets/logoImg.png';
import metrics from '../../styles/metrics';


function Login() {
    const navigation = useNavigation();

    const Background = ({ children }) => {
        return (
            <LinearGradient
            colors={['#ffde1d', '#FFF']}
              style={styles.container}
              locations={[0.5, 0.5]}
              >
              {children}
            </LinearGradient>
        )}
    

    return (
        <>
        <StatusBar backgroundColor="#ffde1d" barStyle="dark-content" />

        <Background>
            <Image style={styles.logo} source={LogoImg} />

            <TextInput 
                style={styles.input} 
                placeholder="Login:" 
                placeholderTextColor={'#FFF'} 
            />

            <TextInput 
                style={styles.input} 
                placeholder="Senha:" 
                placeholderTextColor={'#FFF'} 
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
                <Text style={styles.textRegister} >
                    Ainda não é cadastrado? Registre-se
                </Text>
            </TouchableOpacity>

        </Background>
        </>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        justifyContent: "center",
        alignItems: "center",

        padding: 20
    },

    input: {
        width: 260,
        height: 40,

        fontSize: metrics.fontSizeBig,
        color: '#FFF',

        backgroundColor: metrics.colorYellow,
        
        paddingVertical: 5,
        paddingHorizontal: 10,

        borderColor: 'transparent',
        borderRadius: 10,
        
        marginVertical: 5,
        marginHorizontal: 0,
    },

    logo: {
        maxWidth: 280,
        maxHeight: 300,

        marginTop: 60,
    },

    textRegister: {
        color: '#7dadce',
        fontSize: metrics.fontSizeSmall, 
    },

    button: {
        minWidth: 260,
        height: 45,

        backgroundColor: metrics.colorBlue ,
        
        borderColor: 'transparent',
        
        borderRadius: 10,
        
        margin: 10,
        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },

    buttonText: {
        color: '#FFF',
        fontSize: metrics.fontSizeBig,
    },
})