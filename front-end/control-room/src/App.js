import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './config/GlobalStyle';
import Login from './pages/Login/Login';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';
import { useAuth } from './hooks/useAuth';
import AuthApp from './components/AuthApp/AuthApp';

function App() {
  const { value: authStatus } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {authStatus === 'authorized' ? <AuthApp /> : <Login />}
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
