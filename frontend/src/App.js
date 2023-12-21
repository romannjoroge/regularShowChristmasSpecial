import './App.css';
import Chat from './components/chat';
import Sidebar from './components/sidebar';
import { useState } from 'react';

export default function App() {
  // State for previous chats
  const [previousChats, setPreviousChats] = useState([
    {
      contact: "Benson",
      id:"benson",
      chats: []
    },
    {
      contact: "Skips",
      id:"skips",
      chats: []
    },
    {
      contact: "Mordecai",
      id:"mordecai",
      chats: []
    },
    {
      contact: "Rigby",
      id:"rigby",
      chats: []
    },
    {
      contact: "Muscle Man",
      id:"muscleman",
      chats: []
    },
    {
      contact: "High 5 Ghost",
      id:"high5ghost",
      chats: []
    },
    {
      contact: "Aileen",
      id:"aileen",
      chats: []
    },
    {
      contact: "Pops",
      id:"pops",
      chats: []
    }
  ]);
  let [selectedRecieiver, setSelectedReceiver] = useState('benson')

  let selectedChat = previousChats.find((e) => e.id === selectedRecieiver)

  function updateMessages(message, role) {
    let newSelectedChat = {...selectedChat}
    newSelectedChat.chats.push({role: role, parts: message});
    let chatIndex = previousChats.indexOf(selectedChat);
    previousChats.splice(chatIndex, 1);
    previousChats.push(newSelectedChat);
    setPreviousChats(previousChats);
  }

  function changeReceiver(newReceiver) {
    setSelectedReceiver(newReceiver);
  }

  return (<div className="app-content">
    <Sidebar previousChats={previousChats} changeReceiver={changeReceiver}/>
    <Chat receiver={selectedRecieiver} messages={previousChats.find((e) => e.id === selectedRecieiver).chats} updateMessages={updateMessages}/>
  </div>);
}
