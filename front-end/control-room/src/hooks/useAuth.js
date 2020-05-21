import React, { createContext, useContext } from 'react';
import { AuthMachine } from '../machines/AuthMachine';

import { useMachine, useService } from '@xstate/react';

const AuthServiceContext = createContext();

const AuthProvider = ({ children }) => {
  const [, , service] = useMachine(AuthMachine);
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
