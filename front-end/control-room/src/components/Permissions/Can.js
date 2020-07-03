import React from 'react';

import { isAuthorized } from './permissions';

export default function Can({ role, resource, action, yes: Yes, no: No }) {
  const hasAccess = isAuthorized(resource, action, role);
  return hasAccess ? <Yes /> : <No />;
}
