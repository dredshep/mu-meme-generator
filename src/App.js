import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MemeCreationPage from 'pages/MemeCreationPage';
import Layout from 'parts/Layout';
import theme from 'styles';
import 'App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Switch>
              <Route exact path={'/'} component={MemeCreationPage} />
            </Switch>
          </Layout>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
