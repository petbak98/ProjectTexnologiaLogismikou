import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { Layout } from '../Layout/Layout';

const NavLink = styled(Link)`
  :focus,
  :hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }
`;
const LinkButton = styled(Button)`
  h5 {
    text-transform: none;
    margin-left: 0;
    margin: 1px;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
const Navbar = ({ children }) => {
  return (
    <AppBar color="primary" position="static">
      <Layout>
        <Toolbar>
          <Typography style={{ marginRight: '1rem' }} variant="subtitle1">
            Control Room
          </Typography>
          {children}
        </Toolbar>
      </Layout>
    </AppBar>
  );
};

Navbar.propTypes = {
  children: PropTypes.node
};

Navbar.defaultProps = {
  children: null
};
export { Navbar, LinkButton, NavLink };
