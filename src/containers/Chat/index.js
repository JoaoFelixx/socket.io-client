import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from 'react-redux'
import {
  Input,
  Header,
  Button,
  Content,
  ChatName,
  ChatFoot,
  ChatBody,
  ChatWindow,
  Description,
  MessageContent,
} from './style';
import {
  FlexContainer,
  GroupInfo,
} from '../../components';

function Chat({ socket }) {
  const { username, room } = useSelector(state => state)
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if (currentMessage === "")
      return

    const messageData = {
      room: room,
      author: username,
      message: currentMessage,
      id: socket.id,
      time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
    };

    await socket.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");
  };

  useEffect(() => {

    socket.on("receive_message", (data) => setMessageList((list) => [...list, data]));

  }, [socket]);

  return (
    <FlexContainer>
      <GroupInfo messageList={messageList} />
      <ChatWindow>
        <Header>
          <ChatName> Melhor Grupo {room} </ChatName>
        </Header>
        <ChatBody>
          <ScrollToBottom className='message-container'>
            {messageList.map((messageContent) => {
              return (
                <div className="message" style={
                  username === messageContent.author
                    ? { justifyContent: 'flex-start' }
                    : { justifyContent: 'flex-end' }}>
                  <div>
                    <MessageContent style={
                      username === messageContent.author
                        ? { backgroundColor: '#55aaff', minWidth: '150px' }
                        : { backgroundColor: '#808080', minWidth: '150px' }}>
                      <Description>{messageContent.author} - {messageContent.time}</Description>
                      <Content>{messageContent.message}</Content>

                    </MessageContent>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </ChatBody>
        <ChatFoot >
          <Input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <Button onClick={sendMessage}>&#9658;</Button>
        </ChatFoot>
      </ChatWindow>
    </FlexContainer>
  )
}

export default Chat;