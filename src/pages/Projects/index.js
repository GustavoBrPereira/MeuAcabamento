import React, { useState, useEffect } from 'react';
import { StatusBar, View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import { paddingTop } from '../../styles/metrics';

function Projects() {
    const [pagination, setPagination] = useState(false);
    const [page, setPage] = useState(1);

    const navigation = useNavigation();

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
                    <View style={styles.iconPlus}>

                    </View>
                ))
                }
            </>
        );
    }
    

    return (
        <>
        <StatusBar 
            backgroundColor={isDrawerOpen ? '#f6f6f6' : '#ff13a6' } 
            barStyle="dark-content" 
            animated={true}
        />

            <View style={styles.menu}>
                <MaterialIcons name="menu" size={40} color="#FFF"
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer()) } />
                
                <Text style={styles.textMenu}>Romaneios</Text>
            </View>

            <View style={styles.container}>

                {projectsPerPage.map(item => 
                    <TouchableOpacity key={item} style={styles.projectBox}>
                        <View style={styles.projectBoxTitle}>
                            <Text style={styles.projectTitle}> Romaneio {item} </Text>
                        </View>
                  </TouchableOpacity>
                )}

                {/* {AdjustLayout()} */}

                <TouchableOpacity style={styles.iconPlus} onPress={() => navigation.navigate('NewProject')} >
                    <MaterialIcons name="add-circle" color="#FFDE1D" size={100} />
                </TouchableOpacity>

                {pagination &&
                    <View style={styles.paginationContainer}>
                            <MaterialIcons 
                                name="first-page" 
                                size={28} 
                                color="#408fb7" 
                                onPress={() => controls.first()}
                            />
                        
                            {pagesToShow.map(item => (
                                    <Text 
                                        key={`id_${item}`}
                                        style={styles.paginationText}
                                        onPress={() => controls.goTo(item) }
                                    > 
                                        {item}
                                    </Text>
                                )
                            )}

                            <MaterialIcons 
                                name="last-page" 
                                size={28} 
                                color="#408fb7"
                                onPress={() => controls.last()} 
                            />
                        </View>
                    }
               
            </View>
        </>
    );
}

export default Projects;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
    },

    menu: {
        backgroundColor: '#FF13A7',
        height: 80,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: paddingTop,
    },

    textMenu: {
        color: '#FFF',
        fontFamily: 'roboto-regular',
        fontSize: 35,
        textAlign: 'left',
        flex: 1,
        marginHorizontal: 10,
    },

    projectBox: {
        width: 180,
        height: 180,
        backgroundColor: '#5271FF',
        borderRadius: 15,
        marginVertical: 0,
        marginHorizontal: 10,
        justifyContent: "flex-end",
      },
    
      projectBoxTitle: {
        backgroundColor: '#C2EAFF',
        borderRadius: 15,
        
        height: 44,
        position: 'relative',
        top: 0,
      },
    
      projectTitle: {
        color: '#000',
        fontSize: 26,
        lineHeight: 44,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
      },

    iconPlus: {
        width: 180,
        height: 180,
        backgroundColor: '#f6f6f6',

        borderRadius: 15,
        marginVertical: 0,
        marginHorizontal: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },

    paginationContainer: {
        width: Dimensions.get("window").width,
        maxHeight: 30,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    paginationText: {
        color: '#408fb7',
        fontSize: 25,
        marginVertical: 0,
        marginHorizontal: 5,
    },
})