import React from 'react';
import Axios from 'axios';

function useInterceptor(user) {
  React.useLayoutEffect(() => {
    const myInterceptor = Axios.interceptors.request.use(
      function (config) {
        if (user) {
          //if user exits pass to every request clientID and appId
        }
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
    return () => Axios.interceptors.request.eject(myInterceptor);
  }, [user]);
}

export default useInterceptor;
