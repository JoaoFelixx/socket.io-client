import styled from "styled-components";

export const Info = styled.div`
  grid-area: groupInfo;
  background-color: rgb(77,77,77);
  padding: 8px;
  
  @media (max-width: 800px) {
    visibility:hidden;
    display: none;
  }
`;