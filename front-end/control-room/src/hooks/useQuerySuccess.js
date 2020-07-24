import React from 'react';

import { toast } from 'react-toastify';

function useQuerySuccess(status, callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    if (status === 'success') {
      if (callbackRef.current) {
        callbackRef.current();
      }
      toast.success('Επιτυχής καταχώρηση');
    }
  }, [status]);
  return null;
}

export default useQuerySuccess;
