import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TextInput, 
    TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { useNavigation } from  '@react-navigation/native';

import Menu from '../../components/Menu';
import metrics from '../../styles/metrics';

function NewProject() {
    const [date, setDate] = useState('');

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
            {/* <KeyboardAvoidingView behavior="position"> */}
                
            <Menu title="Novo Romaneio" icon="arrow-back" />

            <ScrollView style={styles.container} >

            <Text style={styles.label}>Número do Romaneio</Text>
            <TextInput
                style={styles.input} 
                placeholder="Número do Romaneio" placeholderTextColor='#b9bcc1'  
                autoComplete='off'
                autoCorrect={false}
                keyboardType='numeric'
            />

            <Text style={styles.label}>Nome do Produto</Text>
            <TextInput
                style={styles.input} 
                placeholder="Nome do Produto" placeholderTextColor='#b9bcc1'  
                autoComplete='off'
                autoCapitalize='words'
                autoCorrect={false}
            />

            <Text style={styles.label}>Número do Corte</Text>
            <TextInput
                style={styles.input} 
                placeholder="Número do Corte" placeholderTextColor='#b9bcc1'  
                keyboardType='numeric'
            />

            <Text style={styles.label}>Digite a data de entrega</Text>
            <TextInput
                style={styles.input} 
                placeholder="Digite a data de entrega" placeholderTextColor='#b9bcc1'  
                value={date}
                onChangeText={setDate}
                keyboardType="default"
            />

            <Text style={styles.label}>Observações</Text>
            <TextInput
                style={styles.input} 
                placeholder="Observações" placeholderTextColor='#b9bcc1'  
                keyboardType='numeric'
            />

            {numerosDePecas.map(numero => {
                return(
                    <View key={`ID_${numero}`}>
                    <Text style={styles.label}>Número de peças {numero}</Text>                        
                    <TextInput style={styles.input}  
                    placeholder={`Número de peças ${numero}`} placeholderTextColor='#b9bcc1'/>

                    <Text style={styles.label}>Número de sobras {numero}</Text>                        
                    <TextInput style={styles.input} 
                    placeholder={`Número de sobras ${numero}`} placeholderTextColor='#b9bcc1'/>

                    <Text style={styles.label}>Número de peças {numero} para lavanderia</Text>                        
                    <TextInput style={styles.input} 
                        placeholder={`Número de peças ${numero} para lavanderia`} placeholderTextColor='#b9bcc1'/>

                    <Text style={styles.label}>Número de peças piloto {numero}</Text>                        
                    <TextInput style={styles.input} 
                        placeholder={`Número de peças piloto ${numero}`} placeholderTextColor='#b9bcc1'/>

                    <Text style={styles.label}>Total de peças {numero}</Text>                        
                    <TextInput style={styles.input} 
                        placeholder={`Total de peças ${numero}`} placeholderTextColor='#b9bcc1'/>

                    <Text style={styles.label}>Número de grades {numero}</Text>                        
                    <TextInput style={styles.input} 
                        placeholder={`Número de grades ${numero}`} placeholderTextColor='#b9bcc1'/>
                    </View>
                );
            })}
            
            <Text style={styles.label}>Total de peças</Text>
            <TextInput
                style={styles.input} 
                placeholder="Total de peças" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Total de peças (incluindo sobras piloto)</Text>
            <TextInput
                style={styles.input} 
                placeholder="Total de peças (incluindo sobras piloto)" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Cliente TONON</Text>
            <TextInput
                style={styles.input} 
                placeholder="Cliente TONON" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Numero de peças para relave</Text>
            <TextInput
                style={styles.input} 
                placeholder="Numero de peças para relave" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Número de peças com defeito</Text>
            <TextInput
                style={styles.input} 
                placeholder="Número de peças com defeito" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Número de peças com zíper quebrado</Text>
            <TextInput
                style={styles.input} 
                placeholder="Número de peças com zíper quebrado" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Número de peças com falta de passantes</Text>
            <TextInput
                style={styles.input} 
                placeholder="Número de peças com falta de passantes" placeholderTextColor='#b9bcc1'  
            />

            <Text style={styles.label}>Total de peças com defeito</Text>
            <TextInput
                style={styles.input} 
                placeholder="Total de peças com defeito" placeholderTextColor='#b9bcc1'  
            />


            <TouchableOpacity onPress={handleFormatDate} style={styles.button}>
                <Text style={styles.buttonText}> Criar </Text>
            </TouchableOpacity>
                
            {/* </KeyboardAvoidingView> */}
        </ScrollView>
        </>
    );
}

export default NewProject;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    label: {
        color: '#000',
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeMedium,
        
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
        color: '#FFF',
        fontSize: metrics.fontSizeBig,
    },
})