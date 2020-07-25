import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import { useLocation } from 'react-router-dom';

import { Navbar, LinkButton, NavLink } from '../Navbar/Navbar';

function NavbarAdmin() {
  const location = useLocation();
  function handeLogout() {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <Navbar>
      <NavLink to='/' activeclassname='activeLink'>
        <LinkButton
          style={location.pathname === '/' ? { color: '#FAFAFB' } : {}}
          endIcon={<ListIcon />}
          color='secondary'
        >
          <h5>Χρήστες</h5>
        </LinkButton>
      </NavLink>
      <NavLink to='/form' activeclassname='activeLink'>
        <LinkButton
          style={location.pathname === '/form' ? { color: '#FAFAFB' } : {}}
          endIcon={<AddIcon />}
          color='secondary'
        >
          <h5>Προσθήκη</h5>
        </LinkButton>
      </NavLink>
      <LinkButton
        onClick={handeLogout}
        style={{ marginLeft: 'auto', color: '#FAFAFB' }}
        color='secondary'
        endIcon={<ExitToAppIcon />}
      >
        <h5>Αποσύνδεση</h5>
      </LinkButton>
    </Navbar>
  );
}

export default NavbarAdmin;