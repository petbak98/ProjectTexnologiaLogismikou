import { queryCache } from 'react-query';

// const REPORTS_IN_ORDER_TO_CLOSE_INCIDENT = 1;

function checkIfIncidentAccepted(incident, user) {
  const match = incident.receivers.some((receiver) => receiver.id === user.id);
  return match;
}

function isServiceUserInvolved(userId, receivers = []) {
  const found = receivers.find((receiver) => receiver.id === userId);
  return found;
}

export function hasAlreadySubmitted(userId, reports) {
  return reports.find((report) => report.userId === userId);
}

export function ableToClose(reports = []) {
  if (reports.length === 0) return false;
  return true;
}

export function refetchQueries(key) {
  queryCache.refetchQueries(key);
}

export { checkIfIncidentAccepted, isServiceUserInvolved };
