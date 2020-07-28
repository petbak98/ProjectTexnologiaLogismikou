import React from 'react';

import { useQuery } from 'react-query';

import { fetchNewIncidents } from '../services/services';

const initialState = {
  count: 0,
  incidents: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ΝΕW_INCIDENTS':
      return {
        count: state.count + action.payload.length,
        incidents: [...state.incidents, ...action.payload],
      };
    case 'RESET_COUNT':
      return { ...state, count: 0 };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
}

function useNewIncidents() {
  const { data, error, status } = useQuery('new-incidents', fetchNewIncidents, {
    //interval 1 minute
    refetchInterval: 15 * 1000,
  });
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (status === 'success') dispatch({ type: 'ΝΕW_INCIDENTS', payload: data });
  }, [data, status]);

  function resetNewIncidentsCount() {
    dispatch({ type: 'RESET_COUNT' });
  }

  function resetNewIncidentsState() {
    dispatch({ type: 'RESET_STATE' });
  }

  return {
    newIncidents: state,
    dispatch,
    error,
    resetNewIncidentsCount,
    resetNewIncidentsState,
    status,
  };
}

export default useNewIncidents;
