import { queryCache, useQuery } from 'react-query';

import { fetchIncidents } from '../services/services';

function useIncidents() {
  function prefetchIncidentById(incidents) {
    incidents.forEach((incident) => {
      const { incidentId } = incident;
      console.log(incident.reports);
      queryCache.setQueryData(
        [
          'incident',
          {
            id: incidentId,
          },
        ],
        incident,
      );
    });
  }

  return useQuery('incidents', fetchIncidents, {
    onSuccess: prefetchIncidentById,
  });
}

export default useIncidents;
