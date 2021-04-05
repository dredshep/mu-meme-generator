import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'styles';
import 'App.css';

const Title = styled.h1`
  color: ${props => props.theme.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Title>Meme generator</Title>
      </div>
    </ThemeProvider>
  );
}

export default App;
