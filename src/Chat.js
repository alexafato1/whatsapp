import React , {useState, useEffect} from 'react'
import {Avatar} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import "./Chat.css"
import { useParams } from "react-router-dom";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();

    useEffect(() => {
        setSeed(Math.floor(Math.random()  * 5000))
    }, [])

    const sendMessage = (e) => {
       e.preventDefault();
       console.log('You typed >>> ', input)
    }

    

    return (
        <div className="chat">
           <div className="chat_header">
             <Avatar src={`https://avatars.dicebear.com/api/male/${seed}/.svg`} />
             <div className="chat_headerInfo">
               <h3>Room name</h3>
               <p>Last seen at ...</p>
             </div>
             <div className="chat_headerRight">
             <DonutLargeIcon/>
             
             <AttachFile/>
          
             <MoreVertIcon/>
             </div>
           </div>

           <div className="chat_body">
              <p className={`chat_message ${false && "chat_reciever"}` }>Hey Gyes
              <span className="chat_name">Alexa</span>
              <span className="chat_timestamp">3:53</span>
              </p> 
              <p className={`chat_message ${true && "chat_reciever"}` }>Hey Gyes
              <span className="chat_name">Alexa</span>
              <span className="chat_timestamp">3:53</span>
              </p> 
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
 