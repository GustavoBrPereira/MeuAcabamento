import React from 'react';
import Menu from '../../components/Menu';
import Title from '../../components/Menu/Title';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import Input from '../../components/Input/Invoice';
import Text, { View1 } from '../../components/Text/Invoice';
import { StatusBar } from 'react-native';

function Invoice() {

    return(
        <>
        <StatusBar backgroundColor="#ffde1d" barStyle="light-content" />

        <TouchableWithoutFeedback style={{}} onPress={Keyboard.dismiss} accessible={false}>
        {/* //     <KeyboardAvoidingView style={{}} behavior="position"> */}
                <>
                <Menu>
                    <MaterialIcons name="menu" size={40} color="#FFF" />
                    <Title>Nota Fiscal</Title>
                </Menu>

                <View1>
                    {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 100, backgroundColor: 'steelblue'}} /> */}
                </View1>

                
                    
                </>
               
        {/* //     </KeyboardAvoidingView> */}
        </TouchableWithoutFeedback>
        </>
    );
}

export default Invoice;