import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/Menu/Title';
import ProjectBox, { Container, ProjectBoxTitle, 
    ProjectTitle, IconAddBox } from '../../components/ProjectBox';
import Pagination, { ListPages } from '../../components/ProjectBox/PaginateProjects';
import { StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';


function Projects({ navigation }) {
    const [pagination, setPagination] = useState(false);
    const [page, setPage] = useState(1);

    const isDrawerOpen = useIsDrawerOpen();

    const numberOfProjects = [1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 
        31, 32, 33, 34, 35,
        36, 37, 38, 39, 40

    ];

    useEffect(() => {
        if(numberOfProjects.length > 5) {
        setPagination(true)
        }
        setPage(1)

    }, [])

    
    
    let perPage = 5
    const state = {
        page,
        perPage,
        totalPage: Math.ceil( numberOfProjects.length / perPage ),
        maxVisibleButtons: 5
    }

    const buttons ={
        calculateProjectsVisible() {
            const firstElementToShowPosition = state.page - 1
            const start = firstElementToShowPosition * state.perPage
            const end = start + state.perPage
            const projectsPerPage = numberOfProjects.slice(start, end);

            return projectsPerPage;
        },
        calculateMaxVisibleButtons() {
            const { maxVisibleButtons } = state
            let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
            let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

            if(maxLeft < 1){
                maxLeft = 1
                maxRight = maxVisibleButtons
            }

            if(maxRight > state.totalPage) {
                maxLeft = state.totalPage - ( maxVisibleButtons - 1 )
                maxRight = state.totalPage

                if(maxLeft < 1) maxLeft = 1
            }

            return { maxLeft, maxRight };
        },
        update() {
            const { maxLeft, maxRight } = buttons.calculateMaxVisibleButtons()
            let pagesToShow = []
            
            for(let page = maxLeft; page <= maxRight; page++){
                pagesToShow.push(page);
            }

            return pagesToShow
        }
    }


    const pagesToShow = buttons.update()
    const projectsPerPage = buttons.calculateProjectsVisible()

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
            

            if(page > state.totalPage) {
                state.page = state.totalPage;
            }
            buttons.update()

        }
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
        <StatusBar backgroundColor={isDrawerOpen ? '#f6f6f6' : '#ff13a6' } barStyle="dark-content" 
        animated={true}
        />

            <Menu>
                <MaterialIcons name="menu" size={40} color="#FFF"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer()) } />
                <Title> Romaneios </Title>
                <MaterialIcons name="search" size={40} color="#FFF" />

            </Menu>

            <Container>

                {projectsPerPage.map(item => (
                    <ProjectBox key={`id_${item}`}>
                        <ProjectBoxTitle>
                            <ProjectTitle>Romaneio {item}</ProjectTitle>
                        </ProjectBoxTitle>
                    </ProjectBox>
                ))}

                {AdjustLayout()}

                <IconAddBox onPress={() => navigation.navigate('NewProject')} >
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
                        
                            {pagesToShow.map(item => (
                                    <ListPages 
                                        key={`id_${item}`}
                                        onPress={() => controls.goTo(item) }
                                    > 
                                        {item}
                                    </ListPages>
                                )
                            )}

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