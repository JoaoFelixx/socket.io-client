import styled from "styled-components";

export const Group = styled.div`
  grid-area: groupInfo;
  background-color: #254c5f;

  @media (max-width: 800px) {
    visibility:hidden;
    display: none;
    grid-area: 0;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 700;
` 

export const Members = styled.h3` 
  display: block;
  color: #fff;
  font-size: 24px;
  padding: 4px;
`;

export const Separator = styled.div`
  padding: 12px;
  width: 100%;
  background-color: #263238;
`;