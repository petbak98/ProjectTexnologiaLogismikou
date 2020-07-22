import { useMutation, queryCache } from 'react-query';

import { createReport, editReport } from '../services/services';

function useMutateReport(edit) {
  const [mutate, { status }] = useMutation(edit ? editReport : createReport, {
    onSuccess: (res) => {
      const { incidentId } = res.data;
      queryCache.refetchQueries([
        'incident',
        {
          id: incidentId,
        },
      ]);
    },
  });
  return { mutate, status };
}

export default useMutateReport;
