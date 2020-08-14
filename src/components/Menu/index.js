import styled from 'styled-components/native';
import { metrics } from '../../styles/metrics.js';

const Menu = styled.View`
    background-color: #FF13A7;
    height: ${metrics.headerHeight}px;
    padding-top: ${metrics.headerPadding}px;
    padding-left: ${metrics.padding}px;
    padding-right: ${metrics.padding}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default Menu;