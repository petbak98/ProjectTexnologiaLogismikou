import React from 'react';

import { useAuthService } from '../../hooks/useAuth';
import useInterceptor from '../../hooks/useInterceptor';
import HomeCC from '../../pages/Home/HomeCC';

function AuthApp() {
  const [state] = useAuthService();
  const { accessToken } = state.context.user;
  useInterceptor(accessToken);
  return <HomeCC />;
}

export default AuthApp;
