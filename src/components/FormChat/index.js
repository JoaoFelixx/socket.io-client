import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleUsernameAndRoom } from '../../store/actions';
import {
  Form,
  Title,
  Label,
  Input,
  FlexItem,
  DivCenter,
  ButtonEnter,
} from './style';
import { localizedStrings } from '../../constants'

function FormChat({ socket }) {

  const dispatch = useDispatch();
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  const joinRoom = () => {
    if (username === "" && room === "")
      return;

    socket.emit("join_room", room);

    const user = { room, username, showChat: true };

    dispatch(toggleUsernameAndRoom(user));
  };

  return (
    <FlexItem>
      <DivCenter>
        <Form>
          <Title> { localizedStrings.joinGroup } </Title>

          <Label>{ localizedStrings.username }</Label>
          <Input
            type="text"
            placeholder="John..."
            onChange={(event) => setUsername(event.target.value)} /> <br/> <br/>

          <Label>{ localizedStrings.groupName }</Label>
          <Input
            type="text"
            placeholder="Grupo da festa..."
            onChange={(event) => setRoom(event.target.value)} /> <br/> <br/>

          <ButtonEnter onClick={joinRoom}>{ localizedStrings.enter }</ButtonEnter>
        </Form>
      </DivCenter>
    </FlexItem>
  )
}

export default FormChat;