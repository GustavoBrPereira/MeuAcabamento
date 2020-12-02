import React, { useState } from 'react';
import { Image, Keyboard, ScrollView, StatusBar, StyleSheet, 
    TextInput, TouchableOpacity, Text, Dimensions, NavigatorIOS } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import metrics  from '../../styles/metrics';
import Menu from '../../components/Menu';
import default_userPhoto from '../../assets/default_userPhoto.png';

import api from '../../services/api';

function Register() {
    const [emailAccount, setEmailAccount] = useState('');
    const [passwordAccount, setPasswordAccount] = useState('');
    const [projectName, setProjectName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerData, setCustomerData] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCNPJ, setCustomerCNPJ] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [providerCompanyName, setProviderCompanyName] = useState('');
    const [providerOwnerName, setProviderOwnerName] = useState('');
    const [providerAddress, setProviderAddress] = useState('');
    const [providerCNPJ, setProviderCNPJ] = useState('');
    const [providerEmail, setProviderEmail] = useState('');
    const [bank, setBank] = useState('');
    const [bankAgency, setBankAgency] = useState('');
    const [operation, setOperation] = useState('');
    const [savingsAccount, setSavingsAccount] = useState('');
    const [phoneContact, setPhoneContact] = useState([]);
    const [image, setImage] = useState('');

    const navigation = useNavigation();


    async function handleCreateUser() {
        const data = new FormData();
        
        data.append('emailAccount', emailAccount);
        data.append('passwordAccount', passwordAccount);
        data.append('projectName', projectName);
        data.append('customerName', customerName);
        data.append('customerData', customerData);
        data.append('customerAddress', customerAddress);
        data.append('customerCNPJ', customerCNPJ);
        data.append('customerEmail', customerEmail);
        data.append('providerCompanyName', providerCompanyName);
        data.append('providerOwnerName', providerOwnerName);
        data.append('providerAddress', providerAddress);
        data.append('providerCNPJ', providerCNPJ);
        data.append('providerEmail', providerEmail);
        data.append('bank', bank);
        data.append('bankAgency', bankAgency);
        data.append('operation', operation);
        data.append('savingsAccount', savingsAccount);
        data.append('phoneContact', phoneContact);
        if (image) {
            data.append('image', {
                name: `image_${Date.now()}.jpg`,
                type: 'image/jpg',
                uri: image,
            });
        }

        await api.post('users', data);

        navigation.navigate('Login');

    }

    async function handleSelectImage() {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status !== 'granted') {
            alert('Precisamos de acesso às suas fotos...')
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (result.cancelled) {
            return;
        }

        const { uri: imageURI } = result;

        setImage(imageURI);
    }

    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="light-content" />

        <Menu title="Cadastro" icon="arrow-back" />
            
            <ScrollView style={styles.container} onPress={Keyboard.dismiss}>

                <TouchableOpacity style={styles.containerUserImg} onPress={handleSelectImage}>
                    {image ? 
                    <Image 
                        source={{
                            uri: image,
                        }}
                        style={styles.userImg} 
                    /> : 
                    <Image 
                        source={default_userPhoto}
                        style={styles.userImg} 
                    />}
                </TouchableOpacity>

                <Text style={styles.label}>Email da Conta</Text>
                <TextInput
                    style={styles.input} 
                    value={emailAccount}
                    onChangeText={setEmailAccount}
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input} 
                    value={passwordAccount}
                    onChangeText={setPasswordAccount}
                    secureTextEntry={true}
                />

                <Text style={styles.label}>Título do romaneio</Text>
                <TextInput
                    style={styles.input} 
                    value={projectName}
                    onChangeText={setProjectName}
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Nome do cliente</Text>
                <TextInput
                    style={styles.input} 
                    alue={customerName}
                    onChangeText={setCustomerName}
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Dados do cliente</Text>
                <TextInput
                    style={styles.input} 
                    alue={customerData}
                    onChangeText={setCustomerData} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Endereço do cliente</Text>
                <TextInput
                    style={styles.input} 
                    alue={customerAddress}
                    onChangeText={setCustomerAddress}
                    keyboardType='email-address'
                    autoComplete='off'
                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <Text style={styles.label}>CNPJ do cliente</Text>
                <TextInput
                    style={styles.input} 
                    alue={customerCNPJ}
                    onChangeText={setCustomerCNPJ}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>E-mail do cliente</Text>
                <TextInput
                    style={styles.input} 
                    alue={customerEmail}
                    onChangeText={setCustomerEmail}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Fornecedor (empresa)</Text>
                <TextInput
                    style={styles.input} 
                    alue={providerCompanyName}
                    onChangeText={setProviderCompanyName}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Fornecedor (proprietário)</Text>
                <TextInput
                    style={styles.input} 
                    alue={providerOwnerName}
                    onChangeText={setProviderOwnerName} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Endereço do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    alue={providerAddress}
                    onChangeText={setProviderAddress}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>CNPJ do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    alue={providerCNPJ}
                    onChangeText={setProviderCNPJ} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>E-mail do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    alue={providerEmail}
                    onChangeText={setProviderEmail}  
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Banco</Text>
                <TextInput
                    style={styles.input} 
                    alue={bank}
                    onChangeText={setBank}  
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Agência</Text>
                <TextInput
                    style={styles.input} 
                    alue={bankAgency}
                    onChangeText={setBankAgency} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Operação</Text>
                <TextInput
                    style={styles.input} 
                    alue={operation}
                    onChangeText={setOperation} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Conta poupança</Text>
                <TextInput
                    style={styles.input} 
                    alue={savingsAccount}
                    onChangeText={setSavingsAccount} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Telefone para contato</Text>
                <TextInput
                    style={styles.input} 
                    alue={phoneContact}
                    onChangeText={setPhoneContact} 
                    autoComplete='off'
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                    <Text style={styles.buttonText}> Cadastrar </Text>
                </TouchableOpacity>

            </ScrollView>
        </>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerUserImg: {
        width: 260, 
        height: 260, 

        alignSelf: 'center', 
        
        borderRadius: 260/2,
        
        marginTop: 20,
    },

    userImg: {
        width: 260, 
        height: 260, 
        
        borderRadius: 260/2,
        
        alignSelf: 'center', 
    },

    label: {
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeMedium,
        color: '#000',
        
        marginTop: 20,
        marginBottom: 5,
        marginHorizontal: 10,
    },

    input: {
        width: ((Dimensions.get('window').width) / 100) *90,
        height: 35,
        color: '#000',

        fontFamily: 'Roboto',
        fontSize: metrics.fontSizeMedium,
        textAlign: 'left',

        marginHorizontal: 10,

        borderBottomColor: '#C0CCDA',
        borderBottomWidth: 2,
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
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeBig,
        color: '#FFF',
    },

})