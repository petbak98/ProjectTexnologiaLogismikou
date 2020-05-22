import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './config/GlobalStyle';
import Login from './pages/Login/Login';
import theme from './config/theme';
import { useAuthService } from './hooks/useAuth';
import AuthApp from './components/AuthApp/AuthApp';

export const ServiceContext = React.createContext();

function App() {
  const [state] = useAuthService();
  const { authStatus } = state.value;
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        toastClassName='toast-style'
        autoClose={2000}
        closeButton={false}
        draggable={false}
      />
      <Router>
        {authStatus === 'authorized' ? <AuthApp /> : <Login />}
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
