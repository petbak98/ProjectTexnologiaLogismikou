import React from 'react';

import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import useNewIncidents from '../../hooks/useNewIncidents';
import useQueryError from '../../hooks/useQueryError';
import NewIncidentsDialog from '../IncidentsDialog/NewIncidentsDialog';

function Notifications() {
  const {
    newIncidents,
    error,
    resetNewIncidentsState,
    resetNewIncidentsCount,
    status,
  } = useNewIncidents();

  const [isOpen, setIsOpen] = React.useState(false);
  useQueryError(status, error);

  function handleClose() {
    setIsOpen(false);
    resetNewIncidentsState();
  }

  function handleOpen() {
    resetNewIncidentsCount();
    setIsOpen(true);
  }

  return (
    <>
      <Badge onClick={handleOpen} badgeContent={newIncidents.count} color='error'>
        <NotificationsIcon />
      </Badge>
      <NewIncidentsDialog newIncidents={newIncidents} open={isOpen} handleClose={handleClose} />
    </>
  );
}

export default Notifications;
