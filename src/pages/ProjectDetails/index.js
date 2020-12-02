import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, TextInput, 
    TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { useNavigation, useRoute } from  '@react-navigation/native';

import api from '../../services/api';
import Menu from '../../components/Menu';
import metrics from '../../styles/metrics';

function ProjectDetails() {
    const [project, setProject] = useState([]);
    const navigation = useNavigation();

    const route = useRoute();
    const { id } = route.params;
    
    useEffect(() => {
        api.get(`projects/${id}`).then(response => {
            setProject(response.data);
        });
    }, [id])
    

    if(!project) {
        <View style={styles.container}>
            <Text>Carregando...</Text>
        </View>   
    }


    const {
        numeroRomaneio,
        nomeProduto,
        numeroCorte,
        dataEntrega,
        observacoes,
        numeroPecas,
        numeroSobras,
        numeroPecasLavanderia,
        numeroPecasPiloto,
        totalPecasPorNumeracao,
        numeroGrades,
        pecasSemDefeito,
        clienteTONON,
        numeroPecasRelave,
        numeroPecasDefeito,
        numeroPecasZiperQuebrado,
        numeroPecasFaltaPassantes,
        pecasComProblema,
        totalPecas
    } = project;


    const numerosDePecas = [36, 38, 40, 42, 44, 46];

    
    async function handleDeleteProject() {
        await api.delete(`projects/${id}`).then(response => {
            const { message } = response.data;

            alert(message);
            navigation.goBack();
        })
    }

    return(
        <>
        <StatusBar backgroundColor="#ff13a6" barStyle="dark-content" />
                
            <Menu title="Detalhes" icon="arrow-back" />

            <ScrollView contentContainerStyle={styles.container}>
            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Número do Romaneio</Text>
                <Text
                    style={styles.input}
                >
                    {numeroRomaneio}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome do Produto</Text>
                <Text
                    style={styles.input} 
                >
                    {nomeProduto}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número do Corte</Text>
                <Text
                    style={styles.input} 
                >
                    {numeroCorte}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Digite a data de entrega</Text>
                <Text
                    style={styles.input} 
                >
                    {dataEntrega}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Observações</Text>
                <Text
                    style={{
                        width: ((Dimensions.get('window').width) / 100) * 60,
                        height: 90,
                        
                        color: '#000',
                        fontFamily: 'Roboto',
                        fontSize: metrics.fontSizeSmall,
                        
                        paddingHorizontal: 12,
                        
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        
                        marginHorizontal: 5,
                        
                        borderWidth: 1.4,
                        borderColor: '#C0CCDA',
                        borderRadius: 5,
                    }}
                >
                    {observacoes}
                </Text>
            </View>

            <Text style={styles.labelPecas}>Número de peças</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map((element, index) => {
                    return(
                        <View key={`ID_${element}`}>
                            <Text style={styles.numeroPecas}>{numerosDePecas[index]}</Text>                        
                            <Text
                                style={styles.inputPecas} 
                            >
                                { numeroPecas ? numeroPecas[index] : null }
                            </Text>
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de sobras</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map((element, index) => {
                    return(
                        <View key={`ID_${element}`}>
                            <Text style={styles.numeroPecas}>{numerosDePecas[index]}</Text>                        
                            <Text
                                style={styles.inputPecas} 
                            >
                                { numeroSobras ? numeroSobras[index] : null }
                            </Text>
                            </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de peças para lavanderia</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map((element, index) => {
                    return(
                        <View key={`ID_${element}`}>
                            <Text style={styles.numeroPecas}>{numerosDePecas[index]}</Text>                        
                            <Text
                                style={styles.inputPecas} 
                            >
                                { numeroPecasLavanderia ? numeroPecasLavanderia[index] : null }
                            </Text>
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de peças piloto</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map((element, index) => {
                    return(
                        <View key={`ID_${element}`}>
                            <Text style={styles.numeroPecas}>{numerosDePecas[index]}</Text>                        
                            <Text
                                style={styles.inputPecas} 
                            >
                                { numeroPecasPiloto ? numeroPecasPiloto[index] : null }
                            </Text>
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Total de peças por Numeração</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map((element, index) => {
                    return(
                        <View key={`ID_${element}`}>
                            <Text style={styles.numeroPecas}>{numerosDePecas[index]}</Text>                        
                            <Text
                                style={styles.inputPecas} 
                            >
                                { totalPecasPorNumeracao ? totalPecasPorNumeracao[index] : null }
                            </Text>
                        </View>
                    );
                })}
            </View>

            <Text style={styles.labelPecas}>Número de grades</Text>
            <View style={styles.containerPecas}>
                {numerosDePecas.map((element, index) => {
                    return(
                        <View key={`ID_${element}`}>
                            <Text style={styles.numeroPecas}>{numerosDePecas[index]}</Text>                        
                            <Text
                                style={styles.inputPecas} 
                            >
                               { numeroGrades ? numeroGrades[index] : null }
                            </Text>
                        </View>
                    );
                })}
            </View>
            
            <View style={styles.containerInput}>
                <Text style={styles.label}>Peças sem Defeito</Text>
                <Text
                    style={styles.input} 
                >
                    {pecasSemDefeito}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Cliente TONON</Text>
                <Text
                    style={styles.input} 
                >
                    {clienteTONON}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Numero de peças para relave</Text>
                <Text
                    style={styles.input} 
                >
                    {numeroPecasRelave}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com defeito</Text>
                <Text
                    style={styles.input} 
                >
                    {numeroPecasDefeito}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com zíper quebrado</Text>
                <Text
                    style={styles.input} 
                >
                    {numeroPecasZiperQuebrado}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Número de peças com falta de passantes</Text>
                <Text
                    style={styles.input} 
                >
                    {numeroPecasFaltaPassantes}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Peças com problema</Text>
                <Text
                    style={styles.input} 
                >
                    {pecasComProblema}
                </Text>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Total de peças</Text>
                <Text
                    style={styles.input} 
                >
                    {totalPecas}
                </Text>
            </View>


            <TouchableOpacity onPress={handleDeleteProject} style={styles.button}>
                <Text style={styles.buttonText}> Excluir Romaneio </Text>
            </TouchableOpacity>
        </ScrollView>
        </>
    );
}

export default ProjectDetails;

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

        backgroundColor: "#ff5454" ,
        
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