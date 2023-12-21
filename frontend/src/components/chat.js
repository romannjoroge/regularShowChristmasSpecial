import { useState } from 'react';
import '../App.css';
import { sendChat } from '../model/sendChat';

export default function Chat(props) {
    // Hold value
    let [chat, setChat] = useState("")

    let receiver = props.receiver;
    let messages = props.messages;
    let updateMessages = props.updateMessages;

    async function handleSubmit(event) {
        // Show users message on screen
        updateMessages(chat, "sender")

        event.preventDefault();
        const response = await sendChat(chat, receiver);
        console.log(response);

        // Show AI's response on screen
        updateMessages(response, "receiver")
        chat = "";
        setChat(chat);
    }

    return (<main className='chat'>
        <DisplayMessage receiver={receiver} messages={messages}/>
        <form onSubmit={handleSubmit} className='send-message'>
            <input type='text' 
                   name='chat' 
                   id='chat' 
                   placeholder='Type message...' 
                   className='prompt-input'
                   value={chat}
                   onChange={(event) => setChat(event.target.value)}
            />
            <button type='sumit' className='prompt-button'>Send</button>
        </form>
    </main>);
}

function DisplayMessage(props) {
    let receiver = props.receiver;
    let messages = props.messages;

    let messageItems = messages.map((m, i) => {
        return <MessageItem key={i} isSender={m.role === "sender"} message={m.parts}/>
    })

    return <div className='display-message'>
        <div className='receiver-display'>
            <p>{receiver}</p>
        </div>
        {messageItems}
    </div>;
}

function MessageItem(props) {
    let isSender = props.isSender;
    let message = props.message;

    // If the message is for the sender show green box otherwise show white
    if(isSender) {
        return < div className='sender-container'>
            <div className='sender-message'>
                <p>{message}</p>
            </div>
        </div>
    } else {
        return <div className='receiver-message'>
            <p>{message}</p>
        </div>
    }
}