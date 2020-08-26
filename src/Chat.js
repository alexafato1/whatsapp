import React , {useState, useEffect} from 'react'
import {Avatar} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import "./Chat.css"

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()  * 5000))
    }, [])
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
               
               
           <p className="chat_message">
            Hey Gyes
            </p> 
           </div>
           <div className="chat_footer">

           </div>

        </div>
    )
}

export default Chat
