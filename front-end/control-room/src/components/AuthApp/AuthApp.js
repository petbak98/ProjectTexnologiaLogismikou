import React from 'react';

import { useAuthService } from '../../hooks/useAuth';
import HomeCC from '../../pages/Home/HomeCC';
import useInterceptor from '../../hooks/useInterceptor';

function AuthApp() {
  const [state] = useAuthService();
  const { accessToken } = state.context.user;
  useInterceptor(accessToken);
  return <HomeCC />;
}

export default AuthApp;
