import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const DrawerContainer = styled.View`
    flex: 1;
    background-color: #f6f6f6;
`;

const UserArea = styled.View`
    flex-direction: row;
    margin-top: 2%;
    margin-left: 1%;
    margin-bottom: 2%;
`;

const UserImg = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 100px;
`;

const UserInfo = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
`;

const UserName = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

const UserEmail = styled.Text`
    font-size: 15px;
`;

const ProjectsArea = styled(UserArea)`
    
`;

const UserProjects = styled.Text`
    font-size: 16px;
`;

const Strong = styled(UserProjects)`
    font-weight: 700;
`;

const BottomArea = styled.TouchableOpacity`
    flex-direction: row;
    margin-left: 3%;
    margin-bottom: 5%;
`;

const SignOut = styled.Text`
    font-size: 23px;
    margin-left: 10px;
`;

function CustomDrawer(props) {
    const navigation = props.navigation;

    return(
        <DrawerContainer>
            <DrawerContentScrollView {...props} >
                <UserArea>
                    <UserImg source={{
                        uri: "https://4.bp.blogspot.com/-G3OGOFT54yg/UceJC3dQkpI/AAAAAAAAATs/PbO2vgkbmp8/s1600/3fc572aa9e3d11e2bd6422000a9f12df_7.jpg"
                    }} />
                    <UserInfo>
                        <UserName>Gustavo Brito </UserName>
                        <UserEmail>gustavobrito@email.com </UserEmail>
                    </UserInfo>
                </UserArea>
                <ProjectsArea>
                    <UserProjects> <Strong>15</Strong> Romaneios </UserProjects>
                </ProjectsArea>
            </DrawerContentScrollView>

            <BottomArea onPress={() => navigation.navigate('Login')} >
                <MaterialIcons name="exit-to-app" size={30} color="#000" />
                <SignOut>Sign Out</SignOut>
            </BottomArea>

        </DrawerContainer>
    );
}

export default CustomDrawer;