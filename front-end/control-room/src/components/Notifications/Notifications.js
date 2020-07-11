import React from 'react';

import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useNewIncidents from '../../hooks/useNewIncidents';
import useQueryError from '../../hooks/useQueryError';

function Notifications() {
  const { incidents, newIncidentsCount, status, error, resetIncidentsCount } = useNewIncidents();
  console.log(newIncidentsCount);
  const [isOpen, setIsOpen] = React.useState(false);
  useQueryError(status, error);

  function handleClick() {
    resetIncidentsCount();
    setIsOpen((current) => !current);
  }
  return (
    <Badge
      style={{ position: 'relative' }}
      onClick={handleClick}
      badgeContent={newIncidentsCount}
      color='error'
    >
      {isOpen && <div>open</div>}
      <NotificationsIcon />
    </Badge>
  );
}

export default Notifications;
