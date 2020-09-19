import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../components/Image/Logo';
import LogoImg from '../../assets/logoImg.png';
import Input from '../../components/Input/Login';
import Button, { ButtonText } from '../../components/Button';
import { Text } from 'react-native';

function Login() {

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
        <Background>
            <Logo source={LogoImg} />

            <Input placeholder="Login:" placeholderTextColor={'#FFF'} />
            <Input placeholder="Senha:" placeholderTextColor={'#FFF'} />

            <Button>
                <ButtonText>Entrar</ButtonText>
            </Button>

            <Text style={{fontSize: 15, color: '#7dadce'}} >
                Ainda não é cadastrado? Registre-se
            </Text>
        </Background>
    );
}

export default Login;