import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LogoImg from '../../assets/logoImg.png';
import { Text, StatusBar, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



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
        backgroundColor: '#ffde1d',
        color: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: 'transparent',
        borderRadius: 10,
        width: 260,
        height: 40,
        fontSize: 25,
        marginVertical: 5,
        marginHorizontal: 0,
    },

    logo: {
        maxWidth: 280,
        maxHeight: 300,
        marginTop: 60,
    },

    textRegister: {
        fontSize: 15, 
        color: '#7dadce',
    },

    button: {
        backgroundColor: "#5271FF" ,
        borderColor: 'transparent',
        minWidth: 260,
        height: 45,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },

    buttonText: {
        color: '#FFF',
        fontSize: 30,
    },
})