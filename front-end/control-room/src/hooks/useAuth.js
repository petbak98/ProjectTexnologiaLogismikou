import React, { createContext, useContext } from 'react';
import { AuthMachine } from '../machines/AuthMachine';

import { useMachine, useService } from '@xstate/react';
import useInterceptor from './useInterceptor';

const AuthServiceContext = createContext();

const AuthProvider = ({ children }) => {
  // const previousState = JSON.parse(localStorage.getItem('authMachine'));
  const [state, , service] = useMachine(AuthMachine);
  useInterceptor(state.user);
  React.useEffect(() => {
    const jsonState = JSON.stringify(state);
    localStorage.setItem('authMachine', jsonState);
  }, [state]);

  return <AuthServiceContext.Provider value={service}>{children}</AuthServiceContext.Provider>;
};

const useAuthService = () => {
  const context = useContext(AuthServiceContext);
  if (context === undefined) {
    throw new Error('useAuthService must be used within a AuthProvider');
  }
  return useService(context);
};

export { AuthProvider, useAuthService };
