import React, { createContext, useContext } from 'react';
import { AuthMachine } from '../machines/AuthMachine';

import { useService } from '@xstate/react';
import usePerstistedMachine from './usePersistedMachine';

const AuthServiceContext = createContext();

const AuthProvider = ({ children }) => {
  const [, , service] = usePerstistedMachine('auth', AuthMachine);
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
