import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../components/Image/Logo';
import LogoImg from '../../assets/logoImg.png';
import Input from '../../components/Input/Login';
import Button, { ButtonText } from '../../components/Button';
import { Text, StatusBar, TouchableOpacity } from 'react-native';
import Register from '../Register';


function Login({ navigation }) {

    const Background = ({ children }) => {
        return (
            <LinearGradient
            colors={['#ffde1d', '#FFF']}
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                padding: 20
              }}
              locations={[0.5, 0.5]}
              >
              {children}
            </LinearGradient>
        )}
    

    return (
        <>
        <StatusBar backgroundColor="#ffde1d" barStyle="dark-content" />

        <Background>
            <Logo source={LogoImg} />

            <Input placeholder="Login:" placeholderTextColor={'#FFF'} />
            <Input placeholder="Senha:" placeholderTextColor={'#FFF'} />

            <Button onPress={() => navigation.navigate('Register')}>
                <ButtonText>Entrar</ButtonText>
            </Button>

            <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
                <Text style={{fontSize: 15, color: '#7dadce'}} >
                    Ainda não é cadastrado? Registre-se
                </Text>
            </TouchableOpacity>

        </Background>
        </>
    );
}

export default Login;