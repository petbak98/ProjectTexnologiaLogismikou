import React from 'react';

import { useQuery } from 'react-query';

import { getUsers } from '../services/services';

function useUsers() {
  const { data, status } = useQuery('users', getUsers);

  return { data, status };
}

export default useUsers;
