
import React from "react";
import './../styles/App.css';
// import {BrowserRouter as Router,Routes,Route} form "react-router-dom";
import {BrowserRouter as Router,Routes,Route,Link}from "react-router-dom"
import Switch from "./Switch";

const App = () => {
  return (
    
    <Router>
    <div>
      <ul>
       <li> <Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        </ul>
    </div>
    <Switch />
    </Router>
    
  
  )
}

export default App



