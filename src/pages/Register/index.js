import React from 'react';
import { KeyboardAvoidingView, Image, Keyboard, TouchableWithoutFeedback, ScrollView,
    StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import registerImg from '../../assets/registerImg.png';
import { paddingTop } from '../../styles/metrics';
import { BorderlessButton } from 'react-native-gesture-handler';

function Register() {
    const navigation = useNavigation();

    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="light-content" />
        <ScrollView style={styles.container} >

            <KeyboardAvoidingView behavior="position" >
                
                <View style={styles.menu}>
                    <BorderlessButton onPress={navigation.goBack}>
                        <MaterialIcons name="arrow-back" size={40} color="#FFF"/>
                    </BorderlessButton>
                    
                    
                    <Text style={styles.textMenu}>Cadastro</Text>
                </View>

                <Image source={{
                    uri: 'https://gtrainer.com.br/images/foto_default.png'
                }} style={{width: 260, height: 260, alignSelf: 'center', marginTop: 10}} />

                <Text style={styles.label}>Título do romaneio</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Título do romaneio" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Nome do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Nome do cliente" placeholderTextColor='#b9bcc1'  
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Dados do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Dados do cliente" placeholderTextColor='#b9bcc1'  
                    keyboardType='numeric'
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Endereço do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Endereço do cliente" placeholderTextColor='#b9bcc1'  
                    keyboardType='email-address'
                    autoComplete='off'
                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <Text style={styles.label}>CNPJ do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="CNPJ do cliente" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>E-mail do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="E-mail do cliente" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Fornecedor (empresa)</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Fornecedor (empresa)" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Fornecedor (proprietário)</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Fornecedor (proprietário)" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Endereço do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Endereço do fornecedor" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>CNPJ do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="CNPJ do fornecedor" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>E-mail do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="E-mail do fornecedor" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Banco</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Banco" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Agência</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Agência" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Operação</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Operação" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Conta poupança</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Conta poupança" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Telefone para contato</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Telefone para contato" placeholderTextColor='#b9bcc1'  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Cadastrar </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </ScrollView>
        </>
    );
}

export default Register;

const styles = StyleSheet.create({
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

    label: {
        color: '#000',
        fontFamily: 'roboto-regular',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        marginHorizontal: 10,
    },

    input: {
        width: ((Dimensions.get('window').width) / 100) *90,
        height: 35,
        color: '#000',

        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'left',

        marginHorizontal: 10,

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
        fontFamily: 'roboto-regular',
        color: '#FFF',
        fontSize: 30,
    },

})