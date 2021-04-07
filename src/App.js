import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import MemeCreationPage from 'pages/MemeCreationPage';
import Layout from 'parts/Layout';
import theme from 'styles/theme';
import 'App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
