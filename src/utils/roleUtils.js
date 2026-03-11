export const ROLES = {
  ADMIN: "admin",
  OPERATOR: "operator",
  VIEWER: "viewer"
};

export function getUserRole() {
  return localStorage.getItem("userRole") || ROLES.VIEWER;
}

export function isAdmin(role) {
  return role === ROLES.ADMIN;
}

export function isOperator(role) {
  return role === ROLES.OPERATOR;
}

export function isViewer(role) {
  return role === ROLES.VIEWER;
}

export function canResolve(role) {
  return role === ROLES.ADMIN;
}

export function canViewIncidents(role) {
  return role === ROLES.ADMIN || role === ROLES.OPERATOR;
}

export function canPerformActions(role) {
  return role === ROLES.ADMIN || role === ROLES.OPERATOR;
}