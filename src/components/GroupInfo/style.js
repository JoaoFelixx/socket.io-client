import styled from "styled-components";

export const Info = styled.div`
  flex-grow: 1;
  background-color: rgb(77,77,77);
  height: 100vh;
  padding: 8px;
  @media (max-width: 800px) {
    visibility:hidden;
    display: none;
  }
`;