import React from 'react';
import Menu from '../../components/Menu';
import Title from '../../components/Menu/Title';
import { MaterialIcons } from '@expo/vector-icons';
import InputRegister from '../../components/Input/Register';
import Button, { ButtonText } from '../../components/Button';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

function Register() {

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="position">
                <Menu>
                    <MaterialIcons name="menu" size={40} color="#FFF" />
                    <Title>Novo Projeto</Title>
                </Menu>

                <InputRegister 
                    placeholder="Número" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCorrect={false}
                    keyboardType='numeric'
                    style={{marginTop: 70}}
                />
                <InputRegister 
                    placeholder="Nome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />
                <InputRegister 
                    placeholder="Endereço" placeholderTextColor='#b9bcc1'  

                />
                <InputRegister 
                    placeholder="CNPJ" placeholderTextColor='#b9bcc1'  
                    keyboardType='numeric'
                />
                <InputRegister 
                    placeholder="Número do Corte" placeholderTextColor='#b9bcc1'  
                    keyboardType='numeric'
                    style={{marginBottom: 70}}
                />
                
                <Button>
                    <ButtonText>Criar</ButtonText>
                </Button>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default Register;