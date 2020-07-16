import React from 'react';

import Axios from 'axios';

function useInterceptor(accessToken) {
  React.useLayoutEffect(() => {
    const myInterceptorRequest = Axios.interceptors.request.use(function changeConfig(config) {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
    const myInterceptorResponse = Axios.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        if (error?.response?.status === 401) {
          localStorage.clear();
          window.location.href = '/';
        }
      },
    );

    return () => {
      Axios.interceptors.response.eject(myInterceptorResponse);
      Axios.interceptors.request.eject(myInterceptorRequest);
    };
  }, [accessToken]);
}

export default useInterceptor;
