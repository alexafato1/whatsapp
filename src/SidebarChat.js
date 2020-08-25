import React from 'react'
import {Avatar} from "@material-ui/core"
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat"> 
         <Avatar src="https://avatars.dicebear.com/api/male/.svg"/>
         <div className="sidebarChat_info">
             <h2>Room 1</h2>
             <p>Last message...</p>
         </div>
         <Avatar src="https://avatars.dicebear.com/api/male/4/.svg"/>
         <div className="sidebarChat_info">
             <h2>Room 2</h2>
             <p>Last message...</p>
         </div>
         <Avatar src="https://avatars.dicebear.com/api/male/1/.svg"/>
         <div className="sidebarChat_info">
             <h2>Room 3</h2>
             <p>Last message...</p>
         </div>
        </div>
    )
}

export default SidebarChat
