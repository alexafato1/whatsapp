import React , {useState, useEffect} from 'react'
import {Avatar} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import db from './firebase';
import { useParams } from "react-router-dom";
import firebase from 'firebase';
import {useStateValue} from "./StateProvider";
import "./Chat.css"


 function Chat() {
  const [input, setInput] = useState('')
  const [seed, setSeed] = useState('')
  const { roomId } = useParams()
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch ] = useStateValue('');

   

    useEffect(() => {
      if(roomId) {
       db.collection('rooms')
       .doc(roomId)
       .onSnapshot((snapshot) => setRoomName
       (snapshot.data().name));

       db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
       .onSnapshot(snapshot => (
         setMessages(snapshot.docs.map((doc) =>
         doc.data()))
       ))
      }
      
      }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random()  * 5000))
    }, [])

    const sendMessage = (e) => {
       e.preventDefault();
       console.log('You typed >>> ', input);

       db.collection('rooms').doc(roomId).collection('messages')
       .add({
         message: input,
         name: user.displayName,
         timestamp: firebase.firestore.FieldValue.serverTimestamp()

       })

       setInput('');
    }

    

    return (
        <div className="chat">
           <div className="chat_header">
             <Avatar src={`https://avatars.dicebear.com/api/male/${seed}/.svg`} />
             <div className="chat_headerInfo">
              <h3>{roomName}</h3>
              
               <p>Last seen at ...
               {new Date(
                 messages[messages.length-1]?.
                 timestamp?.toDate()).toUTCString()}
               </p>
             </div>
             <div className="chat_headerRight">
             <DonutLargeIcon/>
             
             <AttachFile/>
          
             <MoreVertIcon/>
             </div>
           </div>

           <div className="chat_body">
             {messages.map((message) => (

                <p className={`chat_message ${true && "chat_reciever"}` }>{message.message}
                <span className="chat_name">{message.name}</span>
                <span className="chat_timestamp">
                  {new Date(message.timestamp?.toDate()).toUTCString()}</span>
                </p> 
               
             ))}
             
           </div>
           <div className="chat_footer">
             <InsertEmoticonIcon/>
             <form>
              <input value={input} onChange={e => setInput(e.target.value)}
              type="text" placeholder="Type a message"/>
              <button onClick={sendMessage}
              type="submit">Send Message</button>
             </form>
             <MicIcon/>
           </div>
           </div>
    )
}

export default Chat
 