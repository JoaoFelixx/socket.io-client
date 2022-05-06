import styled from "styled-components";

const FlexItem = styled.div`
  flex-grow: 1;
  background-color: rgb(77,77,77);
  height: 100vh;

  @media (max-width: 800px) {
    visibility:hidden;
    display: none;
  }
`;

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
`;

const Image = styled.img`
  width: 250px;
`;

export { DivCenter, FlexItem, Image };