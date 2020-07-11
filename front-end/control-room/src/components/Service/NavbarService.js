import React from 'react';

import CheckIcon from '@material-ui/icons/Check';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import { useLocation } from 'react-router-dom';

import { Navbar, LinkButton, NavLink } from '../Navbar/Navbar';
import Notifications from '../Notifications/Notifications';

export default function NavbarService() {
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
      <NavLink to='/accepted'>
        <LinkButton
          style={location.pathname === '/accepted' ? { color: '#FAFAFB' } : {}}
          color='secondary'
          endIcon={<CheckIcon style={{ display: 'block' }} />}
        >
          <h5>Αποδεχθέντα</h5>
        </LinkButton>
      </NavLink>
      <div style={{ marginLeft: 'auto' }}>
        <LinkButton
          style={{ color: '#FAFAFB', marginLeft: 'auto' }}
          color='secondary'
          endIcon={<Notifications />}
        >
          {''}
        </LinkButton>
        <LinkButton
          onClick={handeLogout}
          style={{ marginLeft: 'auto', color: '#FAFAFB' }}
          color='secondary'
          endIcon={<ExitToAppIcon />}
        >
          <h5>Αποσύνδεση</h5>
        </LinkButton>
      </div>
    </Navbar>
  );
}
