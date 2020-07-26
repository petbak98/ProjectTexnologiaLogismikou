import React from 'react';

import { useAuthService } from '../../../hooks/useAuth';
import useIncidents from '../../../hooks/useIncidents';
import ErrorComponent from '../../Error/ErrorComponent';
import Feed from '../../Feed/Feed';
import Loading from '../../Loading/Loading';

function AcceptedIncidents() {
  const { status, data: incidents } = useIncidents();
  const [authState] = useAuthService();
  const { user } = authState.context;
  const acceptedIncidents = React.useMemo(() => {
    if (!incidents) return [];
    return incidents.filter((incident) => {
      const receiverMatches = incident.receivers.filter((receiver) => receiver.id === user.id);
      if (receiverMatches.length === 0) return false;
      return true;
    });
  }, [incidents, user.id]);
  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorComponent />;
  return <Feed incidents={acceptedIncidents} />;
}

export default AcceptedIncidents;
