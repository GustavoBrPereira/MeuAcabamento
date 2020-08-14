import React from 'react';
import Menu from '../../components/Menu';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/Menu/Title';
import ProjectBox, { Container, ProjectBoxTitle, ProjectTitle } from '../../components/ProjectBox';
import { View, Text } from 'react-native';

function Projects() {
    return (
        <>
            <Menu>
                <MaterialIcons name="menu" size={40} color="#FFF" />
                <Title> Projetos </Title>
                <MaterialIcons name="search" size={40} color="#FFF" />

            </Menu>

            <Container >
                <ProjectBox>
                    <ProjectBoxTitle>
                        <ProjectTitle>Project 1</ProjectTitle>
                    </ProjectBoxTitle>
                </ProjectBox> 
            </Container>
        </>
    );
}

export default Projects;