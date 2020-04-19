import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from './config/GlobalStyle';
import Login from './pages/Login/Login';
import HomeCC from './pages/Home/HomeCC';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/command'>
              <HomeCC />
            </Route>
          </Switch>
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
