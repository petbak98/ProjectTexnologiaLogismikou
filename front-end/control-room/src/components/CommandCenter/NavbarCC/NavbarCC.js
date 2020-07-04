import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import { useLocation } from 'react-router-dom';

import { Navbar, NavLink, LinkButton } from '../../Navbar/Navbar';

export default function NavbarCC() {
  let location = useLocation();

  function handeLogout() {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <Navbar>
      <NavLink to='/' activeclassname='activeLink'>
        <LinkButton
          style={location.pathname === '/' ? { color: '#FAFAFB' } : {}}
          endIcon={<RssFeedIcon />}
          color='secondary'
        >
          <h5>Συμβάντα</h5>
        </LinkButton>
      </NavLink>
      <NavLink to='/form'>
        <LinkButton
          style={location.pathname === '/form' ? { color: '#FAFAFB' } : {}}
          color='secondary'
          endIcon={<AddIcon style={{ display: 'block' }} />}
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
