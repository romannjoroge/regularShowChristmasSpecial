import '../App.css'

export default function Sidebar(props) {
    let previousChats = props.previousChats;
    let changeReceiver = props.changeReceiver;

    return (<nav className="sidebar">
        <AppLogo />
        <Chats previousChats={previousChats} changeReceiver={changeReceiver}/>
    </nav>);
}

function AppLogo() {
    return (
        <div className='app-logo'>
            <p>InstaPark</p>
        </div>
    );
}

function Chats(props) {
    let previousChats = props.previousChats;
    let changeReceiver = props.changeReceiver;

    const chatitems = previousChats.map((p, i) => {
        return <ChatItem item={p} key={i} changeReceiver={changeReceiver}/>
    })
    

    return (<div className='previous-chats'>
        {chatitems}
    </div>);
}

function ChatItem(props) {
    const item = props.item;
    const messages = props.item.chats;
    const finalMessage = messages[messages.length - 1];
    let changeReceiver = props.changeReceiver;

    return (<div className='name-last-text' onClick={() => changeReceiver(item.id)}>
        <p className='name'>{item.contact}</p>
        <p className='last-text'>{finalMessage === undefined ? "": finalMessage.parts.substr(0, 30) + '...'}</p>
    </div>);
}