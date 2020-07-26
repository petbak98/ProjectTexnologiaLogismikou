import React from 'react';

import { useAuthService } from '../../hooks/useAuth';
import useInterceptor from '../../hooks/useInterceptor';
import AdminRoutes from '../../pages/Home/AdminRoutes';
import ContronCenterRoutes from '../../pages/Home/ControlCenterRoutes';
import ServiceRoutes from '../../pages/Home/ServiceRoutes';
import { ROLES } from '../Permissions/permissions';

function AuthApp() {
  const [state] = useAuthService();
  const { accessToken, roles } = state.context.user;
  useInterceptor(accessToken);
  if (roles.includes(ROLES.CONTROL_CENTER_ROLE)) return <ContronCenterRoutes />;
  if (roles.includes(ROLES.USER_ROLE)) return <ServiceRoutes />;
  if (roles.includes(ROLES.ADMIN_ROLE)) return <AdminRoutes />;

  return null;
}

export default AuthApp;
