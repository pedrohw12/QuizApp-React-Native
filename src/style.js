import styled from 'styled-components';

export const Botao = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  width: ${props=>props.width};
  align-items: center;
  height: 30px;
  background: ${props=>props.color ? 'blue' : 'white'}
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 10px;
  border-width: 1px;
  border-radius: 8px;
  background: orange;
  height: ${props=>props.height};
`;