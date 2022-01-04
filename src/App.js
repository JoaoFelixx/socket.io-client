import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";
import { Login } from "./containers";
import Chat from './Chat';
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:5000");

function App() {

  const { showChat, username, room } = useSelector(state => state);
 
  useEffect(() => {

  }, [showChat])

  return (
    <div>
      {!showChat ? (
        <Login socket={socket} />

      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;