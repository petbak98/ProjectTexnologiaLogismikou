import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import HomeCC from '../../pages/Home/HomeCC';
function AuthApp() {
  const { context } = useAuth();
  if (context.user.role === 'cc') {
    return <HomeCC />;
  }
  return null;
}

export default AuthApp;
