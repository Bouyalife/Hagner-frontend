import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';

import AddEntity from "./Components/AddEntity/AddEntity";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import AllEntities from './Components/AllEntities/AllEntities';

import logo from "./Resources/logo.png"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/AddEntity" element={<AddEntity/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/AllEntities" element={<AllEntities/>}/>
      </Routes>
      </BrowserRouter>
      <img id="logo" src={logo} alt="bitchfass"/>
    </div>
    
  );
}

export default App;
