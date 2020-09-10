import React from 'react';
import Menu from '../../components/Menu';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/Menu/Title';
import ProjectBox, { Container, ProjectBoxTitle, 
    ProjectTitle, IconAddBox } from '../../components/ProjectBox';
import Pagination from '../../components/ProjectBox/PaginateProjects';

function Projects() {
    const items = [1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ];

    const state = {
        page: 1,
        perPage: 5
    }

    const page = state.page - 1
    const start = page * state.perPage
    const end = start + state.perPage
    const paginateItems = items.slice(start, end);

    function AdjustLayout() {
        const numbersBox = 5 - paginateItems.length

        const additionalBox = []
        for (i=0; i<numbersBox; i++) {
            additionalBox.push(i);
        }

        return(
            <>
                {additionalBox.map(item => (
                    <IconAddBox style={{backgroundColor: 'transparent' }} key={`id_${item}`} />
                ))
                }
            </>
        );
    }
    



    return (
        <>
            <Menu>
                <MaterialIcons name="menu" size={40} color="#FFF" />
                <Title> Projetos </Title>
                <MaterialIcons name="search" size={40} color="#FFF" />

            </Menu>

            <Container>

                <Pagination />

                {paginateItems.map(item => (
                    <ProjectBox key={`id_${item}`}>
                        <ProjectBoxTitle>
                            <ProjectTitle>Projeto {item}</ProjectTitle>
                        </ProjectBoxTitle>
                    </ProjectBox>
                ))}

                {AdjustLayout()}

                <IconAddBox>
                    <MaterialIcons name="add-circle" color="#FFDE1D" size={100} />
                </IconAddBox>
               
            </Container>

            
            


        </>
    );
}

export default Projects;