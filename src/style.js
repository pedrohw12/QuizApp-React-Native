import styled from 'styled-components';

export default Botao = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  width: 45%;
  align-items: center;
  background: ${props=>props.color ? 'blue' : 'white'}
`;