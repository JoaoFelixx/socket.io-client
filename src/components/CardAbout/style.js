import styled from "styled-components";

export const FlexItem = styled.div`
  flex-grow: 1;
  background-color: rgb(77,77,77);
  height: 100vh;

  @media (max-width: 800px) {
    visibility:hidden;
    display: none;
  }
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
`;

export const Image = styled.img`
  width: 250px;
`;