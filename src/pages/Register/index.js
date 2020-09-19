import React from 'react';
import Menu from '../../components/Menu';
import Title from '../../components/Menu/Title';
import { MaterialIcons } from '@expo/vector-icons'
import registerImg from '../../assets/registerImg.png';
import InputRegister from '../../components/Input/Register';
import Button, { ButtonText } from '../../components/Button';
import { KeyboardAvoidingView, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';

function Register() {

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="position" >
                <Menu>
                    <MaterialIcons name="menu" size={40} color="#FFF" />
                    <Title>Cadastro</Title>
                </Menu>

                <Image source={registerImg} style={{width: 260, height: 260, alignSelf: 'center', marginTop: 10}} />

                <InputRegister 
                    placeholder="Nome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />
                <InputRegister 
                    placeholder="Sobrenome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />
                <InputRegister 
                    placeholder="Telefone" placeholderTextColor='#b9bcc1'  
                    keyboardType='numeric'
                    autoComplete='off'
                    autoCorrect={false}
                />
                <InputRegister 
                    placeholder="Email" placeholderTextColor='#b9bcc1'  
                    keyboardType='email-address'
                    autoComplete='off'
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <InputRegister 
                    placeholder="Senha" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />
                <InputRegister 
                    placeholder="Confirmação da Senha" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Button>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default Register;