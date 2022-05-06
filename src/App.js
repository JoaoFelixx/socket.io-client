import io from "socket.io-client";
import { Login, Chat } from "./containers";
import { useSelector } from "react-redux";
import { GlobalStyle } from './styles';

const socket = io.connect("http://localhost:5000/");

function App() {

  const { showChat } = useSelector(state => state);

  return (
    <div>
      <GlobalStyle />
      {!showChat ? <Login socket={socket} /> : <Chat socket={socket} />}
    </div>
  );
}

export default App;