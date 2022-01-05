import styled from 'styled-components';

export const ChatWindow = styled.div`
  grid-area: messages;
`;

export const ChatBody = styled.div`
  background: #fff;
  padding: 0;
`;

export const Header = styled.div`
  width: 100%;
  background: #263238;
  cursor: pointer;
`;

export const ChatName = styled.div`
  padding: 10px;
  font-size: 24px;
  display: block;
  color: #fff;
  font-weight: bold;
`;

export const ChatFoot = styled.div` 
  position: absolute;
  display: flex;
  bottom: 10px;
  border: 1px solid #263238;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
  } 
`;

export const Button = styled.button`
  border: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 15%;
  background: transparent;
  outline: none;
  font-size: 25px;
  color: lightgray;

  &:hover {
    transition: 1s;
    background: #2e7d32;
  }
`;

export const Input = styled.input`
  flex: 85%;
  border: 0;
  padding: 0 0.7em;
  font-size: 1em;
  border-right: 1px dotted #607d8b;
  outline: none;
`;

export const MessageContent = styled.div`
  width: auto;
  max-width: 120px;
  background-color: #43a047;
  border-radius: 5px;
  color: white;
  margin: 5px;
  padding: 2px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const Content = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 12px;
`;