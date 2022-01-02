import styled from 'styled-components';

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  background-color: #ffffff;
  color: #000000;
  justify-content: flex-start;
  align-items: stretch;

  @media (max-width: 800px) { flex-direction: column; }
`;

export default FlexContainer;