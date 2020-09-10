import styled from  'styled-components/native';;

export const Container = styled.View`
  flex: 1;
  background-color: #f6f6f6;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;

`;

const ProjectBox = styled.View`
    max-width: 180px;
    min-width: 180px;
    max-height: 180px;
    min-height: 180px;
    flex: 1;
    background-color: #5271FF;
    border-radius: 15px;
    margin: 0px 10px;

`;

export const IconAddBox = styled(ProjectBox)`
  background-color: #f6f6f6;
  justify-content: center;
  align-items: center;
  position: relative;
  
`;

export const ProjectBoxTitle = styled.View`
  background-color: #C2EAFF;
  border-radius: 15px;
  width: 100%;
  height: 44px;
  position: absolute;
  bottom: 0;
`;

export const ProjectTitle = styled.Text`
  color: #000;
  font-size: 26px;
  line-height: 44px;
  text-align: center;
  font-family: 'roboto-regular';
`;

export default ProjectBox;