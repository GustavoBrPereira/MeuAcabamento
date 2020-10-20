import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    background-color: ${props => props.delete ? "#ff5454" : "#5271FF"} ;
    border-color: transparent;
    border-radius: 10px;
    width: 260px;
    height: 45px;
    margin: 10px 0px;
    justify-content: center;
    align-items: center;
    align-self: center;

`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 30px;
`;

export default Button;