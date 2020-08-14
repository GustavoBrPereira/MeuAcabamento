import styled from  'styled-components/native';;

export const Container = styled.View`
  flex: 1;
  background-color: #A0F;
`;

const ProjectBox = styled.View`
    width: 236px;
    height: 204px;
    background-color: #5271FF;
    border-radius: 15px;
    margin: 15px 10px;
`;

export const ProjectBoxTitle = styled.View`
  background-color: #C2EAFF;
  border-radius: 15px;
  width: 236px;
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