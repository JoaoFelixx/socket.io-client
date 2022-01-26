import "./App.css";
import io from "socket.io-client";
import { Login, Chat } from "./containers";
import { useSelector } from "react-redux";

const socket = io.connect("https://socket-io-server-pdaox7neb-joaofelixx.vercel.app");

function App() {

  const { showChat } = useSelector(state => state);

  return (
    <div>
      {  !showChat ? <Login socket={socket} /> : <Chat socket={socket} />  }
    </div>
  );
}

export default App;