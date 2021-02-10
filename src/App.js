import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle.js';
import styled from 'styled-components/macro';
import Home  from './pages/Home.js';
import NavBar from './components/NavBar.js';
import Experience from './pages/Experience.js';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
}`

const App = () => {
  return(
    <AppContainer>
      <NavBar />
      <GlobalStyle />
      <Home />
      <Experience />
    </AppContainer>
  );
}

export default App;
