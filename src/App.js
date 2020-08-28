import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css';

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div className="app_body">
        <Router>
          <Switch>
          <Router path="/rooms:roomId">
         <Sidebar/> 
         <Chat/>
         </Router>
         <Router path="/">
         <Sidebar/>  
         </Router>
         
         
        </Switch>
         </Router>
      </div>
    </div>
  );
}

export default App;
