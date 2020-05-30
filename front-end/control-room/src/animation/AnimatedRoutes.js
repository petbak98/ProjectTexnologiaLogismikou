import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AnimatedRoutes = ({ children, exitBeforeEnter, initial }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch key={location.pathname} location={location}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};

AnimatedRoutes.propTypes = {
  children: PropTypes.node,
  exitBeforeEnter: PropTypes.bool,
  initial: PropTypes.bool
};

AnimatedRoutes.defaultProps = {
  children: {},
  exitBeforeEnter: false,
  initial: false
};
