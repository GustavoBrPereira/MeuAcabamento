import { Platform } from 'react-native';
import styled from 'styled-components/native';

const paddingTop = Platform.OS === 'ios' ? 20 : 0;


const Menu = styled.View`
    background-color: #FF13A7;
    height: 80px;
    padding: 0px 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${paddingTop}px;
`;

export default Menu;