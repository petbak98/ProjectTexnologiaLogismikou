function checkIfIncidentAccpeted(incident, user) {
  const match = incident.receivers.some((receiver) => receiver.id === user.id);
  return match;
}

export { checkIfIncidentAccpeted };
