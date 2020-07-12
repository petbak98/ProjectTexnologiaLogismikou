function checkIfIncidentAccepted(incident, user) {
  const match = incident.receivers.some((receiver) => receiver.id === user.id);
  return match;
}

function isServiceUserInvolved(userId, receivers = []) {
  const found = receivers.find((receiver) => receiver.id === userId);
  return found;
}

export { checkIfIncidentAccepted, isServiceUserInvolved };
