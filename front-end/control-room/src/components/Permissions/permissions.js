const ADMIN_ROLE = 'ROLE_ADMIN';
const CONTROL_CENTER_ROLE = 'ROLE_MODERATOR';
const USER_ROLE = 'ROLE_USER';

export const Permissions = {
  incident: {
    view: [ADMIN_ROLE, CONTROL_CENTER_ROLE, USER_ROLE],
    edit: [ADMIN_ROLE, CONTROL_CENTER_ROLE],
  },
};

export const isAuthorized = (resource, action, role) => {
  const canAccessResource = Permissions[resource][action].includes(role);
  return canAccessResource;
};
