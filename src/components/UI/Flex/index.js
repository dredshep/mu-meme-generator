import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  align-items:  ${props => props.align ? props.align : 'flex-start'};
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex-wrap: ${props => props.wrap && 'wrap'};
  margin: ${props => props.mg && props.mg};
  padding: ${props => props.pd && props.pd};
  width: ${props => props.fullWidth && '100%'};
  flex: ${props => props.flex};
  height: ${props => props.fullHeight && '100%'};
`;

export default Flex;