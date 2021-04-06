import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from 'parts/Layout';
import theme from 'styles';
import 'App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
