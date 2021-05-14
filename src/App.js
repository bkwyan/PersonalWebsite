import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle.js';
import Home  from './pages/Home.js';
import NavBar from './components/NavBar.js';
import Experience from './pages/Experience.js';
import { homeObjOne, homeObjTwo, homeObjThree} from './pages/Data.js';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return(
    <>
      <GlobalStyle />
      <NavBar />
      <Home />
      <Experience {...homeObjOne}/>
      <Experience {...homeObjTwo}/>
      <Experience {...homeObjThree}/>
    </>
  );
}

export default App;
