import React, {Component, useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';
import BackgroundImage from './background.jpg';

const App = () => {
  return(
    <div className='background'>
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
