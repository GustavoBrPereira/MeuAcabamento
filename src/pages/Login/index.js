import React from 'react';
import InputLogin from '../../components/Input/Login';
import Button, { InputText } from '../../components/Button';
import ProjectBox, { Box, ProjectBoxTitle, ProjectTitle } from '../../components/ProjectBox';
import InputRegister from '../../components/Input/Register';
import Menu from '../../components/Menu';
import { View, Text } from 'react-native';

function Login() {

    return (
        <>
            <Menu />

            <InputLogin placeholder={"Login"} placeholderTextColor={'#FFF'}  />
            <Button>
                <InputText> Entrar </InputText> 
            </Button>

            <ProjectBox>
                <ProjectBoxTitle>
                    <ProjectTitle> Project </ProjectTitle>
                </ProjectBoxTitle>
            </ProjectBox>

            <InputRegister placeholder={"Nome"} placeholderTextColor={'#8492A6'} />
        </>
    );
}

export default Login;