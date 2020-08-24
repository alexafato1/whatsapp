import React from 'react';
import {Avatar, IconButton, SvgIcon} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {SearchOutlined} from '@material-ui/icons';


import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
         <div className="sidebar_header">
          <Avatar />
          <div className="sidebar_headerRight">
              <IconButton>
                <DonutLargeIcon/>
             </IconButton>

             <IconButton>
                <ChatIcon/>
             </IconButton>

             <IconButton>
                <MoreVertIcon/>
             </IconButton>
             
          </div>
         </div>

         <div className="sidebar_search">
          <SearchOutlined/>
          <input placeholder="Search or start new chat" type="text"/>
         </div>
         <div className="sidebar_chats">

         </div>
        </div>
    )
}