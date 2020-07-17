import { useMutation } from 'react-query';

import { createReport } from '../services/services';

function useMutateReport() {
  const [mutate, { status }] = useMutation(createReport);
  return { mutate, status };
}

export default useMutateReport;
