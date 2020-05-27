import React, { createContext, useContext } from 'react';
import { AuthMachine } from '../machines/AuthMachine';

import { useMachine, useService } from '@xstate/react';

const AuthServiceContext = createContext();

const AuthProvider = ({ children }) => {
  const previousState = JSON.parse(localStorage.getItem('authMachine'));
  const [state, , service] = useMachine(AuthMachine, { state: previousState });

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
