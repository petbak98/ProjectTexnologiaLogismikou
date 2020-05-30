import React from 'react';
import Axios from 'axios';

function useInterceptor(accessToken) {
  React.useLayoutEffect(() => {
    const myInterceptor = Axios.interceptors.request.use(
      function changeConfig(config) {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      function handleError() {
        // Do something with request error
        return Promise.reject();
      }
    );
    return () => Axios.interceptors.request.eject(myInterceptor);
  }, [accessToken]);
}

export default useInterceptor;
