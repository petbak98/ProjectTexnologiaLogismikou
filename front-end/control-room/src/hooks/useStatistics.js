import React from 'react';

import { useQuery } from 'react-query';

import { fetchStats } from '../services/services';

function useStatistics() {
  const { data } = useQuery('stats', fetchStats);
  console.log(data);
  return <div></div>;
}

export default useStatistics;
