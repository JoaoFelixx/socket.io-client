import styled from 'styled-components';

export const FlexItem = styled.div`
  flex-grow: 2;
  background-image: url('./img/lighthouse.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  height: auto;
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
`;

export const Form = styled.form`
  width: 450px;
  height: 300px;
  background-color: rgb(200,200,200);
  border: 5px solid;
  padding: 8px;
  border-image: linear-gradient(270deg, #12FA8C, #019AFA 100%) 1;

  @media (max-width: 550px) {
    width: 92%;
  } 
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  width: 98%;
  font-size: 22px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonEnter = styled.button`
  width: 100%;
  background-color: rgb(20,250,40);
  color: #ffffff;
  padding: 8px;
  font-size: 24px;
  cursor: pointer;
  
  &:hover {
    transition: 1s;
    background-color: rgb(20,150,40);
  }
`;