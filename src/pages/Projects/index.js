import React, { useState } from 'react';
import { StatusBar, View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation, useFocusEffect } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import metrics from '../../styles/metrics';

import api from '../../services/api';

function Projects() {
    const [projects, setProjects] = useState([]);
    const navigation = useNavigation();

    useFocusEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    });    

    const isDrawerOpen = useIsDrawerOpen();

    

    function handleNavigateToProjectDetails(id) {
        navigation.navigate('ProjectDetails', { id })
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

            <ScrollView contentContainerStyle={styles.container}>

                {projects.map(project => 
                    <TouchableOpacity 
                        key={project.id} 
                        style={styles.projectBox}
                        onPress={() => handleNavigateToProjectDetails(project.id)}
                    >
                        <View style={styles.projectBoxTitle}>
                            <Text style={styles.projectTitle}> Romaneio {project.id} </Text>
                        </View>
                    </TouchableOpacity>
                )}

                <TouchableOpacity 
                    style={styles.iconPlus} 
                    onPress={() => navigation.navigate('NewProject')} 
                >
                    <MaterialIcons name="add-circle" color="#FFDE1D" size={100} />
                </TouchableOpacity>
               
            </ScrollView>
        </>
    );
}

export default Projects;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
        backgroundColor: '#f6f6f6',
        
        justifyContent: 'space-between',
        alignContent: "space-around"
    },

    menu: {
        height: 80,
        
        flexDirection: 'row',
        
        backgroundColor: metrics.colorPink,
        
        paddingHorizontal: 15,
        paddingTop: metrics.paddingTopMenu,
        
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textMenu: {
        flex: 1,
        
        color: '#FFF',
        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeTitle,

        textAlign: 'left',
        
        marginHorizontal: 10,
    },

    projectBox: {
        width: 180,
        height: 180,

        backgroundColor: metrics.colorBlue,
        
        borderRadius: 15,
        
        marginVertical: 10,
        marginHorizontal: 10,
        
        justifyContent: "flex-end",
      },
    
      projectBoxTitle: {
        height: 44,
        
        backgroundColor: '#C2EAFF',
        
        borderRadius: 15,
        
        position: 'relative',
        top: 0,
      },
    
      projectTitle: {
        color: '#000',

        fontFamily: 'roboto-regular',
        fontSize: metrics.fontSizeBig,
        lineHeight: 44,
        textAlign: 'center',
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
        fontSize: metrics.fontSizeBig,
        
        marginVertical: 0,
        marginHorizontal: 5,
    },
})