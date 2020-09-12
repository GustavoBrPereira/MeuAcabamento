import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/Menu/Title';
import ProjectBox, { Container, ProjectBoxTitle, 
    ProjectTitle, IconAddBox } from '../../components/ProjectBox';
import Pagination, { ListPages } from '../../components/ProjectBox/PaginateProjects';

function Projects() {
    const [pagination, setPagination] = useState(false);
    const [page, setPage] = useState(1);

    const numberOfProjects = [1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 
        // 31, 32, 33, 34, 35,
        // 36, 37, 38, 39, 40

    ];

    useEffect(() => {
        if(numberOfProjects.length > 5) {
        setPagination(true)
        }
        setPage(1)
        console.log(pagination)

    }, [])

    
    
    let perPage = 5
    const state = {
        page,
        perPage,
        totalPage: Math.ceil( numberOfProjects.length / perPage )
    }

    const firstElementToShowPosition = state.page - 1
    const start = firstElementToShowPosition * state.perPage
    const end = start + state.perPage
    const projectsPerPage = numberOfProjects.slice(start, end);

    const controls = {
        first() {
            setPage(1)
        },
        last() {
            setPage(state.totalPage)
        },
        goTo(page) {
            if(page < 1) {
               page = 1
            }

            state.page = page
            setPage(page)
            console.log(page)
            

            if(page > state.totalPage) {
                state.page = state.totalPage;
            }
        }
    }

    

    function showPages(controls) {
        
            const numbersPages = []
            for(let p=0; p<state.totalPage; p++) {
                numbersPages.push(p);
            }

            let pagesShowed = 0
            
            return(
                <>
                    {numbersPages.map(item => (
                            <ListPages 
                                key={`id_${item}`}
                                onPress={() => controls.goTo(item + 1) }
                            > 
                                {item + 1}
                            </ListPages>
                        )
                    )}
                </>
            )
        
    }




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

                {pagination ? 
                        <Pagination>
                            <MaterialIcons 
                                name="first-page" 
                                size={28} 
                                color="#408fb7" 
                                onPress={() => controls.first()}
                            />
                        
                            {showPages(controls)}

                            <MaterialIcons 
                                name="last-page" 
                                size={28} 
                                color="#408fb7"
                                onPress={() => controls.last()} 
                            />
                        </Pagination>
                : null}
               
            </Container>

            
            


        </>
    );
}

export default Projects;