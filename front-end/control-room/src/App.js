import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from './config/GlobalStyle';
import Login from './pages/Login/Login';
import HomeCC from './pages/Home/HomeCC';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';
import { useAuth } from './hooks/useAuth';
import AuthApp from './components/AuthApp/AuthApp';
function App() {
  const { value } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {value === 'authorized' ? <AuthApp /> : <Login />}

        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
