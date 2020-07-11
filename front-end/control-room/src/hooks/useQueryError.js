import React from 'react';

import { toast } from 'react-toastify';

function useQueryError(status, error) {
  React.useEffect(() => {
    if (status === 'error') {
      toast.error(error?.message || 'Πρόβλημα Server');
    }
  }, [status, error]);
}

export default useQueryError;
