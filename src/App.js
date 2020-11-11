import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle.js';
import styled from 'styled-components/macro';
import Home  from './pages/Home.js';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
}`

const App = () => {
  return(
    <AppContainer>
      <GlobalStyle />
      <Home />
    </AppContainer>
  );
}

export default App;
