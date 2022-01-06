import "./App.css";
import io from "socket.io-client";
import { Login, Chat } from "./containers";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:5000");

function App() {

  const { showChat } = useSelector(state => state);

  return (
    <div>
      {  !showChat ? <Login socket={socket} /> : <Chat socket={socket} />  }
    </div>
  );
}

export default App;