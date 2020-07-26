import { useQuery } from 'react-query';

import { fetchStats } from '../services/services';

function useStatistics() {
  const { data, status } = useQuery('stats', fetchStats);
  return { data, status };
}

export default useStatistics;
