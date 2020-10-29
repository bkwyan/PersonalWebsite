import React, {Component, useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return(
    <div className='background'>
      <Header />
      <NavBar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
