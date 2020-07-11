import React from 'react';

import { useQuery } from 'react-query';

import { fetchNewIncidents } from '../services/services';

function useNewIncidents() {
  const { data = [], status, error } = useQuery('new-incidents', fetchNewIncidents, {
    refetchInterval: 10 * 1000,
  });
  const [newIncidentsCount, setNewIncidentsCount] = React.useState(3);
  React.useEffect(() => {
    setNewIncidentsCount(data.length);
  }, [data.length]);

  function resetIncidentsCount() {
    setNewIncidentsCount(0);
  }
  return { incidents: data, status, error, newIncidentsCount, resetIncidentsCount };
}

export default useNewIncidents;
