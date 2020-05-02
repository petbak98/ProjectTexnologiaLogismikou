import React from 'react';
import { useLocation } from 'react-router-dom';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Navbar, NavLink, LinkButton } from '../../Navbar/Navbar';
import { useAuthService } from '../../../hooks/useAuth';
import { userLogout } from '../../../machines/AuthMachine.types';

export default function NavbarCC() {
  let location = useLocation();
  const send = useAuthService();

  function handeLogout() {
    send(userLogout);
  }
  return (
    <Navbar>
      <NavLink to='/' activeclassname='activeLink'>
        <LinkButton
          active={location.pathname === '/' ? 'active' : ''}
          endIcon={<RssFeedIcon />}
          color='secondary'
        >
          Συμβάντα
        </LinkButton>
      </NavLink>
      <NavLink to='/form'>
        <LinkButton
          active={location.pathname === '/form' ? 'active' : ''}
          color='secondary'
          endIcon={<AddIcon />}
        >
          Προσθήκη
        </LinkButton>
      </NavLink>
      <LinkButton
        onClick={handeLogout}
        active={'active'}
        style={{ marginLeft: 'auto' }}
        color='secondary'
        endIcon={<ExitToAppIcon />}
      >
        Αποσύνδεση
      </LinkButton>
    </Navbar>
  );
}
