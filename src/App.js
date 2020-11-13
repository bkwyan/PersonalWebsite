import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle.js';
import styled from 'styled-components/macro';
import Home  from './pages/Home.js';
import NavBar from './components/NavBar.js';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
}`

const App = () => {
  return(
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <Home />
    </AppContainer>
  );
}

export default App;
