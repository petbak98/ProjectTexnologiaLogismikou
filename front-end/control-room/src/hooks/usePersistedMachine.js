import React from 'react';

import { useMachine } from '@xstate/react';

function usePerstistedMachine(key, machine, options = { initialContext: undefined }) {
  const previousState = JSON.parse(localStorage.getItem(key));
  const { initialContext } = options;

  // ensure that machine optios dont change between renders
  const [machineOptions] = React.useState(
    previousState ? { state: previousState } : { context: initialContext },
  );

  const [state, send, service] = useMachine(machine, machineOptions);
  React.useEffect(() => {
    const jsonState = JSON.stringify(state);
    if (state.matches('unauthorized')) {
      if (jsonState) localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, jsonState);
    }
  }, [state, key]);
  return [state, send, service];
}

export default usePerstistedMachine;
