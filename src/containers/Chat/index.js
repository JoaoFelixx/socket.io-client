import { Messages } from '../../components';

function Chat({ socket, username, room }) {
  return (
    <Messages socket={socket} username={username} room={room} />
  )
}

export default Chat;