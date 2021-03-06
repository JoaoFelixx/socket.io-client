import styled from 'styled-components';

const FlexItem = styled.div`
  flex-grow: 2;
  background-image: url('./img/lighthouse.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  height: auto;
`;

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
`;

const Form = styled.div`
  width: 50vw;
  background-color: #ffffff;
  border: 5px solid;
  padding: 8px;
  border-image: linear-gradient(270deg, #12FA8C, #019AFA 100%) 1;

  @media (max-width: 700px) { width: 92%; } 
  @media (max-width: 400px) { width: 90%; } 

`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 99%;
  height: 30px;
  font-size: 16px;
  border: 0 none;
  border-bottom: 1px solid #000000;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;  }
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
`;

const ButtonEnter = styled.button`
  width: 100px;
  background-color: #55aaff;
  color: #ffffff;
  padding: 8px;
  font-size: 24px;
  border: none;
  float: right;
  cursor: pointer;

  &:hover {
    transition: 1s;
    background-color: #3487da;
  }
`;

export { 
  Form,
  Title,
  Label,
  Input,
  FlexItem,
  DivCenter,
  ButtonEnter,
}