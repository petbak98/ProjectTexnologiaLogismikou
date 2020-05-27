import React from 'react';
import { useQuery } from 'react-query';

import { fetchIncidents } from '../services/services';

function useIncidents() {
  return useQuery('incidents', fetchIncidents);
}

export default useIncidents;
