import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TextInput, 
    TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { useNavigation } from  '@react-navigation/native';

import Menu from '../../components/Menu';
import metrics from '../../styles/metrics';

function NewProject() {
    const [numeroRomaneio, setNumeroRomaneio] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [numeroCorte, setNumeroCorte] = useState('');
    const [date, setDate] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [numeroPecas, setNumeroPecas] = useState([]);

    const navigation = useNavigation();

    const numerosDePecas = [36, 38, 40, 42, 44, 46];

    function handleFormatDate() {
        function zeroFill(n) {
            return n < 9 ? `0${n}` : `${n}`;
        }

        const arrayDate = date.split('/');
        const data = new Date(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}T00:00:00-03:00`);
        
        const d = zeroFill(data.getDate());
        const mo = zeroFill(data.getMonth() + 1);
        const y = zeroFill(data.getFullYear());
        
        const dataFormatted = `${d}/${mo}/${y}`;

        console.log(dataFormatted);

        return dataFormatted;

    }

    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="dark-content" />
                
            <Menu title="Detalhes" icon="arrow-back" />

            <ScrollView contentContainerStyle={styles.container}>

            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Número do Romaneio</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                    autoComplete='off'
                    autoCorrect={false}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome do Produto</Text>
                <TextInput
                    style={styles.input} 
                    value={nomeProduto}
                    onChangeText={setNomeProduto}
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
                    onChangeText={setNumeroCorte}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Digite a data de entrega</Text>
                <TextInput
                    style={styles.input} 
                    value={date}
                    onChangeText={setDate}
                    value={date}
                    onChangeText={setDate}
                    keyboardType="default"
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Observações</Text>
                <TextInput
                    style={[styles.input, { height: 90 }]} 
                    value={observacoes}
                    onChangeText={setObservacoes}
                    multiline={true}
                />
            </View>

            <Text style={styles.labelPecas}>Número de peças</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map(numero => {
                    return(
                        <View>
                            <Text key={`ID_${numero}`} style={styles.numeroPecas}>{numero}</Text>                        
                            <TextInput 
                                style={styles.inputPecas}
                            />
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de sobras</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map(numero => {
                    return(
                        <View>
                            <Text key={`ID_${numero}`} style={styles.numeroPecas}>{numero}</Text>                        
                            <TextInput 
                                style={styles.inputPecas}  
                                value={numeroRomaneio}
                                onChangeText={setNumeroRomaneio}
                            />
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de peças para lavanderia</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map(numero => {
                    return(
                        <View>
                            <Text key={`ID_${numero}`} style={styles.numeroPecas}>{numero}</Text>                        
                            <TextInput 
                                style={styles.inputPecas}  
                                value={numeroRomaneio}
                                onChangeText={setNumeroRomaneio}
                            />
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de peças piloto</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map(numero => {
                    return(
                        <View>
                            <Text key={`ID_${numero}`} style={styles.numeroPecas}>{numero}</Text>                        
                            <TextInput 
                                style={styles.inputPecas}  
                                value={numeroRomaneio}
                                onChangeText={setNumeroRomaneio}
                            />
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Total de peças</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map(numero => {
                    return(
                        <View>
                            <Text key={`ID_${numero}`} style={styles.numeroPecas}>{numero}</Text>                        
                            <TextInput 
                                style={styles.inputPecas}  
                                value={numeroRomaneio}
                                onChangeText={setNumeroRomaneio}
                            />
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de grades</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map(numero => {
                    return(
                        <View>
                            <Text key={`ID_${numero}`} style={styles.numeroPecas}>{numero}</Text>                        
                            <TextInput 
                                style={styles.inputPecas}  
                                value={numeroRomaneio}
                                onChangeText={setNumeroRomaneio}
                            />
                        </View>
                    );
                })}
            </View>
            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Total de peças</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Total de peças (incluindo sobras piloto)</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Cliente TONON</Text>
                <TextInput
                    style={styles.input}  
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Numero de peças para relave</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com defeito</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com zíper quebrado</Text>
                <TextInput
                    style={styles.input} 
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com falta de passantes</Text>
                <TextInput
                    style={styles.input}  
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Total de peças com defeito</Text>
                <TextInput
                    style={styles.input}  
                    value={numeroRomaneio}
                    onChangeText={setNumeroRomaneio}
                />
            </View>


            <TouchableOpacity onPress={handleFormatDate} style={styles.button}>
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
        
        textAlign: 'left',
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