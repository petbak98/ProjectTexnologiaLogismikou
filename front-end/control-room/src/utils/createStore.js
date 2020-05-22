import React from 'react';

function createStore(dispatch, initState) {
  const StoreContext = React.createContext();
  const DispatchContext = React.createContext();
  function StoreProvider({ children }) {
    return (
      <StoreContext.Provider value={initState}>
        <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
      </StoreContext.Provider>
    );
  }

  function useStore() {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
      throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
  }

  function useStoreDispatch() {
    const context = React.useContext(DispatchContext);
    if (context === undefined) {
      throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
  }

  return [StoreProvider, useStore, useStoreDispatch];
}

export default createStore;
