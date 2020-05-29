import { useQuery } from 'react-query';

import { fetchIncidents } from '../services/services';

function useIncidents() {
  return useQuery('incidents', fetchIncidents, { retry: 0 });
}

export default useIncidents;
