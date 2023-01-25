import React from "react";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import './App.css'

function App() {
  return (
    <div className="App">
      <center className="chatbot">
      <Chatbot className='chatbot'
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </center>
    </div>
  );
}

export default App;