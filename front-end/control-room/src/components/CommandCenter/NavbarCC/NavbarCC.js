import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import AddIcon from '@material-ui/icons/Add';
import { Navbar, NavLink, LinkButton } from '../../Navbar/Navbar';

export default function NavbarCC() {
  let match = useRouteMatch();
  let location = useLocation();
  return (
    <Navbar>
      <NavLink to={`${match.path}`} activeclassname='activeLink'>
        <LinkButton
          active={location.pathname === `${match.path}` ? 'active' : ''}
          endIcon={<RssFeedIcon />}
          color='secondary'
        >
          Συμβάντα
        </LinkButton>
      </NavLink>
      <NavLink to={`${match.path}/form`}>
        <LinkButton
          active={location.pathname === `${match.path}/form` ? 'active' : ''}
          color='secondary'
          endIcon={<AddIcon />}
        >
          Προσθήκη
        </LinkButton>
      </NavLink>
    </Navbar>
  );
}
