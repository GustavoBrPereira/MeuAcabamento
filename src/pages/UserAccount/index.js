import React from 'react';
import Menu from '../../components/Menu';
import Title from '../../components/Menu/Title';
import { MaterialIcons } from '@expo/vector-icons'
import registerImg from '../../assets/registerImg.png';
import InputUpdate from '../../components/Input/UpdateAccount';
import Button, { ButtonText } from '../../components/Button';
import { KeyboardAvoidingView, Image, Keyboard, TouchableWithoutFeedback, StatusBar, TouchableOpacity } from 'react-native';

function UserAccount({ navigation }) {
    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="light-content" />
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="position" >
                <Menu>
                    <MaterialIcons name="arrow-back" size={40} color="#FFF" 
                    onPress={() => navigation.goBack() } />
                    <Title>Conta</Title>
                </Menu>

                <TouchableOpacity style={{
                    width: 260, height: 260, alignSelf: 'center', borderRadius: 260/2, 
                    backgroundColor: 'red', marginTop: 20
                    }}>
                    <Image 
                        source={registerImg} 
                        style={{width: 260, height: 260, alignSelf: 'center', borderRadius: 260/2}} 
                    />
                </TouchableOpacity>

                <InputUpdate 
                    placeholder="Nome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                    selectTextOnFocus={true}
                    value="Gustavo"
                />
                <InputUpdate 
                    placeholder="Sobrenome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                    selectTextOnFocus={true}
                    value="Brito"
                    
                />
                <InputUpdate 
                    placeholder="Telefone" placeholderTextColor='#b9bcc1'  
                    keyboardType='numeric'
                    autoComplete='off'
                    autoCorrect={false}
                    selectTextOnFocus={true}
                    value="(11) 9 1234-5678"
                />

                <Button>
                    <ButtonText>Atualizar</ButtonText>
                </Button>

                <Button delete>
                    <ButtonText>Excluir Conta</ButtonText>
                </Button>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </>
    );
}

export default UserAccount;