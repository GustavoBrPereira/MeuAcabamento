import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TextInput, 
    TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { useNavigation } from  '@react-navigation/native';

import Menu from '../../components/Menu';
import metrics from '../../styles/metrics';
import api from '../../services/api';

function NewProject() {
    const [numeroRomaneio, setNumeroRomaneio] = useState();
    const [nomeProduto, setNomeProduto] = useState('');
    const [numeroCorte, setNumeroCorte] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const [numeroPecasObject, setNumeroPecasObject] = useState({
        n36: '', n38: '', n40: '', 
        n42: '', n44: '', n46: ''
    });

    const [numeroSobrasObject, setNumeroSobrasObject] = useState({
        n36: '', n38: '', n40: '', 
        n42: '', n44: '', n46: ''
    });

    const [numeroPecasLavanderiaObject, setNumeroPecasLavanderiaObject] = useState({
        n36: '', n38: '', n40: '', 
        n42: '', n44: '', n46: ''
    });

    const [numeroPecasPilotoObject, setNumeroPecasPilotoObject] = useState({
        n36: '', n38: '', n40: '', 
        n42: '', n44: '', n46: ''
    });

    const [numeroGradesObject, setNumeroGradesObject] = useState({
        n36: '', n38: '', n40: '', 
        n42: '', n44: '', n46: ''
    });

    const [clienteTONON, setClienteTONON] = useState('');
    const [numeroPecasRelave, setNumeroPecasRelave] = useState('');
    const [numeroPecasDefeito, setNumeroPecasDefeito] = useState('');
    const [numeroPecasZiperQuebrado, setNumeroPecasZiperQuebrado] = useState('');
    const [numeroPecasFaltaPassantes, setNumeroPecasFaltaPassantes] = useState('');

    const navigation = useNavigation();

    const user_id = 2;
    
    
    async function handleCreateProject() {

        const numeroPecas = [
            numeroPecasObject.n36, numeroPecasObject.n38, numeroPecasObject.n40,
            numeroPecasObject.n42, numeroPecasObject.n44, numeroPecasObject.n46
        ];

        const numeroSobras = [
            numeroSobrasObject.n36, numeroSobrasObject.n38, numeroSobrasObject.n40,
            numeroSobrasObject.n42, numeroSobrasObject.n44, numeroSobrasObject.n46
        ];

        const numeroPecasLavanderia = [
            numeroPecasLavanderiaObject.n36, numeroPecasLavanderiaObject.n38, numeroPecasLavanderiaObject.n40,
            numeroPecasLavanderiaObject.n42, numeroPecasLavanderiaObject.n44, numeroPecasLavanderiaObject.n46
        ];

        const numeroPecasPiloto = [
            numeroPecasPilotoObject.n36, numeroPecasPilotoObject.n38, numeroPecasPilotoObject.n40,
            numeroPecasPilotoObject.n42, numeroPecasPilotoObject.n44, numeroPecasPilotoObject.n46
        ];

        const numeroGrades = [
            numeroGradesObject.n36, numeroGradesObject.n38, numeroGradesObject.n40,
            numeroGradesObject.n42, numeroGradesObject.n44, numeroGradesObject.n46
        ];

        const data = {
            numeroRomaneio,
            nomeProduto,
            numeroCorte,
            dataEntrega,
            observacoes,
            numeroPecas,
            numeroSobras,
            numeroPecasLavanderia,
            numeroPecasPiloto,
            numeroGrades,
            clienteTONON,
            numeroPecasRelave,
            numeroPecasDefeito,
            numeroPecasZiperQuebrado,
            numeroPecasFaltaPassantes,
            user_id
        };

        console.log(data)

        await api.post('projects', data);
        // .catch(error => {
        //     if (error.response) {
        //       // Request made and server responded
        //       console.log(error.response.data);
        //       console.log(error.response.status);
        //       console.log(error.response.headers);
        //     } else if (error.request) {
        //       // The request was made but no response was received
        //       console.log(error.request);
        //     } else {
        //       // Something happened in setting up the request that triggered an Error
        //       console.log('Error', error.message);
        //     }
        // });

        navigation.navigate('Drawer');

    }

    function Inputs(peca, func) {
        return (
            <>
                <View>
                <Text style={styles.numeroPecas}>36</Text>                        
                <TextInput style={styles.inputPecas}
                    value={peca.n36}
                    onChangeText={value => func({...peca, n36: value})}
                />
                </View>

                <View>
                <Text style={styles.numeroPecas}>38</Text>                        
                <TextInput style={styles.inputPecas}
                    value={peca.n38}
                    onChangeText={value => func({...peca, n38: value})}
                />
                </View>

                <View>
                <Text style={styles.numeroPecas}>40</Text>                        
                <TextInput style={styles.inputPecas}
                    value={peca.n40}
                    onChangeText={value => func({...peca, n40: value})}
                />
                </View>

                <View>
                <Text style={styles.numeroPecas}>42</Text>                        
                <TextInput style={styles.inputPecas}
                    value={peca.n42}
                    onChangeText={value => func({...peca, n42: value})}
                />
                </View>

                <View>
                <Text style={styles.numeroPecas}>44</Text>                        
                <TextInput style={styles.inputPecas}
                    value={peca.n44}
                    onChangeText={value => func({...peca, n44: value})}
                />
                </View>

                <View>
                <Text style={styles.numeroPecas}>46</Text>                        
                <TextInput style={styles.inputPecas}
                    value={peca.n46}
                    onChangeText={value => func({...peca, n46: value})}
                />
                </View> 
            </>
        );
    }


    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="dark-content" />
            {/* <KeyboardAvoidingView behavior="position"> */}
                
            <Menu title="Novo Romaneio" icon="arrow-back" />

            <ScrollView contentContainerStyle={styles.container}>
            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Número do Romaneio</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={value => setNumeroRomaneio(value)}
                    
                    autoComplete='off'
                    autoCorrect={false}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome do Produto</Text>
                <TextInput
                    style={styles.input} 
                    value={nomeProduto}
                    onChangeText={value => setNomeProduto(value)}
                    
                    autoComplete='off'
                    autoCapitalize='words'
                    autoCorrect={false}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número do Corte</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroCorte}
                    onChangeText={value => setNumeroCorte(value)}
                    
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Digite a data de entrega</Text>
                <TextInput
                    style={styles.input} 
                    value={dataEntrega}
                    onChangeText={value => setDataEntrega(value)}
                    
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Observações</Text>
                <TextInput
                    style={[styles.input, { height: 90 }]} 
                    value={observacoes}
                    onChangeText={value => setObservacoes(value)}
                    
                    multiline={true}
                />
            </View>

            <Text style={styles.labelPecas}>Número de peças</Text>
            <View style={styles.containerPecas}>

                {Inputs(numeroPecasObject, setNumeroPecasObject)}
            </View>

            <Text style={styles.labelPecas}>Número de sobras</Text>
            <View style={styles.containerPecas}>

                {Inputs(numeroSobrasObject, setNumeroSobrasObject)}

            </View>

            <Text style={styles.labelPecas}>Número de peças para lavanderia</Text>
            <View style={styles.containerPecas}>

                {Inputs(numeroPecasLavanderiaObject, setNumeroPecasLavanderiaObject)}
            </View>

            <Text style={styles.labelPecas}>Número de peças piloto</Text>
            <View style={styles.containerPecas}>

                {Inputs(numeroPecasPilotoObject, setNumeroPecasPilotoObject)}
           
            </View>

            <Text style={styles.labelPecas}>Número de grades</Text>
            <View style={styles.containerPecas}>

                {Inputs(numeroGradesObject, setNumeroGradesObject)}
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Cliente TONON</Text>
                <TextInput
                    style={styles.input}  
                    value={clienteTONON}
                    onChangeText={value => setClienteTONON(value)}
                    
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Numero de peças para relave</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroPecasRelave}
                    onChangeText={value => setNumeroPecasRelave(value)}
                    
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com defeito</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroPecasDefeito}
                    onChangeText={value => setNumeroPecasDefeito(value)}
                    
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com zíper quebrado</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroPecasZiperQuebrado}
                    onChangeText={value => setNumeroPecasZiperQuebrado(value)}
                    
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com falta de passantes</Text>
                <TextInput
                    style={styles.input}  
                    value={numeroPecasFaltaPassantes}
                    onChangeText={value => setNumeroPecasFaltaPassantes(value)}
                    
                />
            </View>

            <TouchableOpacity onPress={handleCreateProject} style={styles.button}>
                <Text style={styles.buttonText}> Criar </Text>
            </TouchableOpacity>
        </ScrollView>
        </>
    );
}

export default NewProject;

const styles = StyleSheet.create({
    container:{
    },

    containerInput: {
        width: Dimensions.get('window').width,

        flexDirection: "row",

        marginVertical: 10,

        justifyContent: "space-around",
        alignItems: "center",
    },

    label: {
        width: ((Dimensions.get('window').width) / 100) * 40,
        
        color: '#000',
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeMedium,
        
    },

    input: {
        width: ((Dimensions.get('window').width) / 100) * 50,
        height: 45,
        
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: metrics.fontSizeMedium,
        
        paddingHorizontal: 12,
        
        textAlign: 'left',
        textAlignVertical: 'center',
        
        marginHorizontal: 5,
        
        borderWidth: 1.4,
        borderColor: '#C0CCDA',
        borderRadius: 5,
    },

    labelPecas: {
        width: ((Dimensions.get('window').width) / 100) * 100,
        
        color: '#000',
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeMedium,

        marginTop: 10,
        marginHorizontal: 10,

    },

    containerPecas: {
        flexDirection: "row",
        flexWrap: "wrap",

        marginHorizontal: 10,

        justifyContent: "space-between",
    },

    numeroPecas: {
        fontFamily: "roboto-regular",
        fontSize: metrics.fontSizeMedium,

        alignSelf: "center",
    },

    inputPecas: {
        width: ((Dimensions.get('window').width) / 100) * 12.5,
        height: ((Dimensions.get('window').width) / 100) * 12.5,
        
        color: '#000',
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeMedium,
        
        paddingHorizontal: 12,
        
        textAlign: 'center',
        textAlignVertical: 'center',
        
        marginHorizontal: 5,
        
        borderWidth: 1.4,
        borderColor: '#C0CCDA',
        borderRadius: 5,
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
        color: '#FFF',
        fontSize: metrics.fontSizeBig,
    },
})