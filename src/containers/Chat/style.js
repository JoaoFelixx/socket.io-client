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
  bottom: 10px;
  display: flex;
  border: 1px solid #263238;
  justify-content: space-between;

  @media (max-width: 800px) { width: 99%; } 
`;

export const Button = styled.button`
  width: 20%;
  border: 0;
  place-items: center;
  cursor: pointer;
  background: transparent;
  outline: none;
  font-size: 25px;
  color: #fff;
  background-color: #0ced18;
  
  &:hover { background-color: #2e7d32; }
`;

export const Input = styled.input`
  width: 80%;
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
  padding: 8px;
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