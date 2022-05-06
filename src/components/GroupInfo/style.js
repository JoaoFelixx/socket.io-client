import styled from "styled-components";

const Group = styled.div`
  grid-area: groupInfo;
  background-color: #254c5f;

  @media (max-width: 800px) {
    visibility:hidden;
    display: none;
    grid-area: 0;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 700;
`;

const Members = styled.h3` 
  display: block;
  color: #fff;
  font-size: 24px;
  padding: 4px;
`;

const Separator = styled.div`
  padding: 12px;
  width: 100%;
  background-color: #263238;
`;

export { Title, Group, Members, Separator };