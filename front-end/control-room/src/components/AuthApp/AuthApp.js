import React from 'react';
import { useAuthService } from '../../hooks/useAuth';
import HomeCC from '../../pages/Home/HomeCC';
function AuthApp() {
  const [state] = useAuthService();
  const { context } = state;
  if (context.user.role === 'cc') {
    return <HomeCC />;
  }
  return null;
}

export default AuthApp;
