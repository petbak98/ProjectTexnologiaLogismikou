import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthApp from './components/AuthApp/AuthApp';
import { queryConfig } from './config/config.utils';
import GlobalStyle from './config/GlobalStyle';
import theme from './config/theme';
import { useAuthService } from './hooks/useAuth';
import Login from './pages/Login/Login';

function App() {
  const [state] = useAuthService();
  const authStatus = state.value;
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <ThemeProvider theme={theme}>
        <ReactQueryDevtools initialIsOpen={false} />
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
    </ReactQueryConfigProvider>
  );
}

export default App;
