import { useMutation } from 'react-query';

import { editIncident } from '../services/services';

function useEditIncident() {
  const [mutate, { status }] = useMutation(editIncident);
  return { mutate, status };
}

export default useEditIncident;
