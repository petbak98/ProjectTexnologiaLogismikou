const ADMIN_ROLE = 'ROLE_ADMIN';
const CONTROL_CENTER_ROLE = 'ROLE_MODERATOR';
const USER_ROLE = 'ROLE_USER';

export const ROLES = {
  ADMIN_ROLE,
  CONTROL_CENTER_ROLE,
  USER_ROLE,
};

export const Permissions = {
  incident: {
    view: [ADMIN_ROLE, CONTROL_CENTER_ROLE, USER_ROLE],
    edit: [ADMIN_ROLE, CONTROL_CENTER_ROLE],
  },
};

export const isAuthorized = (resource, action, roles) => {
  const canAccessResource = roles.some((role) => {
    return Permissions[resource][action].includes(role);
  });
  return canAccessResource;
};
