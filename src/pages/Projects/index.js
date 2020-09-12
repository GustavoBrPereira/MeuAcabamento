import React from 'react';
import Menu from '../../components/Menu';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/Menu/Title';
import ProjectBox, { Container, ProjectBoxTitle, 
    ProjectTitle, IconAddBox } from '../../components/ProjectBox';
import Pagination from '../../components/ProjectBox/PaginateProjects';

function Projects() {
    const numberOfProjects = [1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ];

    let perPage = 5
    const state = {
        page: 1,
        perPage,
        totalPage: Math.ceil( numberOfProjects.length / perPage )
    }

    const firstElementToShowPosition = state.page - 1
    const start = firstElementToShowPosition * state.perPage
    const end = start + state.perPage
    const projectsPerPage = numberOfProjects.slice(start, end);

    const controls = {
        next() {
            state.page++;

            if(state.page > state.totalPage) {
                state.page--;
            }
        },
        prev() {
            state.page--;

            if(state.page < 1) {
                state.page++
            }
        },
        goTo(page) {
            if(page < 1) {
               page = 1
            }

            state.page = page
            

            if(page > state.totalPage) {
                state.page = state.totalPage;
            }
        }
    }

    console.log(state.page)
    controls.prev()
    console.log(state.page)


    function AdjustLayout() {
        const emptyBoxes = 5 - projectsPerPage.length

        const additionalBoxes = []
        for (i=0; i<emptyBoxes; i++) {
            additionalBoxes.push(i);
        }

        return(
            <>
                {additionalBoxes.map(item => (
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

                <Pagination>
                    <MaterialIcons name="first-page" size={35} color="#408fb7" />
                    <MaterialIcons name="chevron-left" size={35} color="#408fb7" />

                    

                    <MaterialIcons name="chevron-right" size={35} color="#408fb7" />
                    <MaterialIcons name="last-page" size={35} color="#408fb7" />
                </Pagination>

                {projectsPerPage.map(item => (
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