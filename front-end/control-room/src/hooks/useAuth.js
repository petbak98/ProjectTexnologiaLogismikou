import React, { createContext, useContext } from 'react';
import { AuthMachine } from '../machines/AuthMachine';

import { useMachine } from '@xstate/react';

const AuthConext = createContext();
const AuthServiceContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, send] = useMachine(AuthMachine);
  return (
    <AuthConext.Provider value={state}>
      <AuthServiceContext.Provider value={send}>{children}</AuthServiceContext.Provider>
    </AuthConext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthConext);
  if (context === undefined) {
    throw new Error('useAuthConext must be used within a AuthProvider');
  }
  return context;
};
const useAuthService = () => {
  const context = useContext(AuthServiceContext);
  if (context === undefined) {
    throw new Error('useStepsDispatch must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth, useAuthService };
