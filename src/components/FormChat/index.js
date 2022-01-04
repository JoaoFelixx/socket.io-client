import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleUsernameAndRoom } from '../../store/actions'

import {
  FlexItem,
  DivCenter,
  Title,
  Input,
  Label,
  Form,
  ButtonEnter,
} from './style';

function FormChat({ socket }) {

  const dispatch = useDispatch();
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  const joinRoom = () => {
    if (username === "" && room === "")
      return

    socket.emit("join_room", room);

    const user = { room, username, showChat: true };

    dispatch(toggleUsernameAndRoom(user))
  };

  return (
    <FlexItem>
      <DivCenter>
        <Form>
          <Title>Entrar no grupo</Title>

          <Label>Nome de usuário</Label>
          <Input
            type="text"
            placeholder="John..."
            onChange={(event) => setUsername(event.target.value)} /> <br/> <br/>

          <Label>ID da sala</Label>
          <Input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => setRoom(event.target.value)} /> <br/> <br/>

          <ButtonEnter onClick={joinRoom}>Entrar</ButtonEnter>
        </Form>
      </DivCenter>
    </FlexItem>
  )
}

export default FormChat;