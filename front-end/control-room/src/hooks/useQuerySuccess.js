import React from 'react';

import { toast } from 'react-toastify';

function useQuerySuccess(status, callback) {
  const memoCallback = React.useCallback(() => {
    return callback;
  }, [callback]);
  React.useEffect(() => {
    if (status === 'success') {
      toast.success('Επιτυχής καταχώρηση');
      if (memoCallback) memoCallback();
    }
  }, [status, memoCallback]);
  return null;
}

export default useQuerySuccess;
