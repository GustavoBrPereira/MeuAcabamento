import React, {useState} from 'react';
import { Image, Keyboard, ScrollView, StatusBar, TouchableOpacity, 
    StyleSheet, TextInput, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import registerImg from '../../assets/registerImg.png';
import metrics from '../../styles/metrics';
import Menu from '../../components/Menu';


function UserAccount() {
    const [tituloRomaneio, setTituloRomaneio] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [dadosCliente, setDadosCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [CNPJCliente, setCNPJCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [fornecedorEmpresa, setFornecedorEmpresa] = useState('');
    const [fornecedorProprietario, setFornecedorProprietario] = useState('');
    const [enderecoFornecedor, setEnderecoFornecedor] = useState('');
    const [CNPJFornecedor, setCNPJFornecedor] = useState('');
    const [emailFornecedor, setEmailFornecedor] = useState('');
    const [banco, setBanco] = useState('');
    const [agencia, setAgencia] = useState('');
    const [operacao, setOperacao] = useState('');
    const [contaPoupanca, setContaPoupanca] = useState('');
    const [telefone, setTelefone] = useState([]);

    const navigation = useNavigation();

    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="light-content" />

            <Menu title="Conta" icon="arrow-back" /> 

            <ScrollView style={styles.container} onPress={Keyboard.dismiss} >

                <TouchableOpacity style={styles.containerUserImg}>
                    <Image 
                        source={registerImg}
                        style={styles.userImg} 
                    />
                </TouchableOpacity>

                <Text style={styles.label}>Título do romaneio</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Título do romaneio" placeholderTextColor='#b9bcc1'  
                    value={tituloRomaneio}
                    onValueChange={setTituloRomaneio}
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Nome do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Nome do cliente" placeholderTextColor='#b9bcc1'  
                    alue={nomeCliente}
                    onValueChange={setNomeCliente}
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Dados do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Dados do cliente" placeholderTextColor='#b9bcc1' 
                    alue={dadosCliente}
                    onValueChange={setDadosCliente} 
                    keyboardType='numeric'
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Endereço do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Endereço do cliente" placeholderTextColor='#b9bcc1'  
                    alue={enderecoCliente}
                    onValueChange={setEnderecoCliente}
                    keyboardType='email-address'
                    autoComplete='off'
                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <Text style={styles.label}>CNPJ do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="CNPJ do cliente" placeholderTextColor='#b9bcc1'  
                    alue={CNPJCliente}
                    onValueChange={setCNPJCliente}
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>E-mail do cliente</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="E-mail do cliente" placeholderTextColor='#b9bcc1'  
                    alue={emailCliente}
                    onValueChange={setEmailCliente}
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Fornecedor (empresa)</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Fornecedor (empresa)" placeholderTextColor='#b9bcc1'  
                    alue={fornecedorEmpresa}
                    onValueChange={setFornecedorEmpresa}
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Fornecedor (proprietário)</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Fornecedor (proprietário)" placeholderTextColor='#b9bcc1' 
                    alue={fornecedorProprietario}
                    onValueChange={setFornecedorProprietario} 
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Endereço do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Endereço do fornecedor" placeholderTextColor='#b9bcc1'  
                    alue={enderecoFornecedor}
                    onValueChange={setEnderecoFornecedor}
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>CNPJ do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="CNPJ do fornecedor" placeholderTextColor='#b9bcc1' 
                    alue={CNPJFornecedor}
                    onValueChange={setCNPJFornecedor} 
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>E-mail do fornecedor</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="E-mail do fornecedor" placeholderTextColor='#b9bcc1'
                    alue={emailFornecedor}
                    onValueChange={setEmailFornecedor}  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Banco</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Banco" placeholderTextColor='#b9bcc1'
                    alue={banco}
                    onValueChange={setBanco}  
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Agência</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Agência" placeholderTextColor='#b9bcc1' 
                    alue={agencia}
                    onValueChange={setAgencia} 
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Operação</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Operação" placeholderTextColor='#b9bcc1' 
                    alue={operacao}
                    onValueChange={setOperacao} 
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Conta poupança</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Conta poupança" placeholderTextColor='#b9bcc1' 
                    alue={contaPoupanca}
                    onValueChange={setContaPoupanca} 
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <Text style={styles.label}>Telefone para contato</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Telefone para contato" placeholderTextColor='#b9bcc1' 
                    alue={telefone}
                    onValueChange={setTelefone} 
                    secureTextEntry={true}
                    autoComplete='off'
                    autoCorrect={false}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Atualizar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonDelete}>
                    <Text style={styles.buttonText}> Excluir Conta </Text>
                </TouchableOpacity>

            </ScrollView>
        </>
    );
}

export default UserAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerUserImg: {
        width: 260, 
        height: 260, 

        borderRadius: 260/2,
        
        alignSelf: 'center', 
        
        marginTop: 20,
    },

    userImg: {
        width: 260, 
        height: 260, 
        
        alignSelf: 'center', 
        
        borderRadius: 260/2
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
        fontSize: metrics.fontSizeBig,
        color: '#FFF',
    },

    buttonDelete: {
        width: 260,
        height: 45,
        
        backgroundColor: "#ff5454" ,
        
        borderColor: 'transparent',
        borderRadius: 10,
        
        margin: 10,
        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})