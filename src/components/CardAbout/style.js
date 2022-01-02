import styled from "styled-components";

export const FlexItem = styled.div`
  flex-grow: 1;
  background-color: rgb(77,77,77);
  height: 100vh;
`;

export const DivCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  position: relative;
  top: 150px;
  width: 250px;
  height: auto;
  z-index: 1;
`;