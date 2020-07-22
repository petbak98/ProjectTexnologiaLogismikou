import { useMutation, queryCache } from 'react-query';

import { editIncident } from '../services/services';

function useEditIncident() {
  const [mutate, { status }] = useMutation(editIncident, {
    onSettled: () => {
      queryCache.refetchQueries(['incidents']);
    },
  });
  return { mutate, status };
}

export default useEditIncident;
