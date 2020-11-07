import React from 'react';
import { KeyboardAvoidingView, Image, Keyboard, TouchableWithoutFeedback, 
    StatusBar, TouchableOpacity, StyleSheet, TextInput, Dimensions, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import registerImg from '../../assets/registerImg.png';
import { paddingTop } from '../../styles/metrics';
import { BorderlessButton } from 'react-native-gesture-handler';


function UserAccount() {
    const navigation = useNavigation();

    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="light-content" />
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView behavior="position" >
                
                <View style={styles.menu}>
                    <BorderlessButton onPress={navigation.goBack}>
                        <MaterialIcons name="arrow-back" size={40} color="#FFF"/>
                    </BorderlessButton>

                    <Text style={styles.textMenu}>Conta</Text>
                </View>

                <TouchableOpacity style={styles.useImg}>
                    <Image 
                        source={registerImg} 
                        style={{width: 260, height: 260, alignSelf: 'center', borderRadius: 260/2}} 
                    />
                </TouchableOpacity>

                <TextInput
                    style={styles.input} 
                    placeholder="Nome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                    selectTextOnFocus={true}
                    value="Gustavo"
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Sobrenome" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                    selectTextOnFocus={true}
                    value="Brito"
                    
                />
                <TextInput
                    style={styles.input} 
                    placeholder="Telefone" placeholderTextColor='#b9bcc1'  
                    keyboardType='numeric'
                    autoComplete='off'
                    autoCorrect={false}
                    selectTextOnFocus={true}
                    value="(11) 9 1234-5678"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Atualizar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonDelete}>
                    <Text style={styles.buttonText}> Excluir Conta </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </>
    );
}

export default UserAccount;

const styles = StyleSheet.create({
    useImg: {
        width: 260, 
        height: 260, 
        alignSelf: 'center', 
        borderRadius: 260/2,
        backgroundColor: 'red',
        marginTop: 20
    },

    menu: {
        backgroundColor: '#FF13A7',
        height: 80,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: paddingTop,
    },

    textMenu: {
        color: '#FFF',
        fontFamily: 'roboto-regular',
        fontSize: 35,
        textAlign: 'left',
        flex: 1,
        marginHorizontal: 10,
    },

    input: {
        fontFamily: 'Roboto',
        fontSize: 25,
        height: 35,
        width: ((Dimensions.get('window').width) / 100) * 75,
        textAlign: 'left',
        color: '#000',
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: '#C0CCDA',
        borderBottomWidth: 2,
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

    buttonDelete: {
        backgroundColor: "#ff5454" ,
        borderColor: 'transparent',
        borderRadius: 10,
        width: 260,
        height: 45,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})