import React from 'react';

import { Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { checkIfIncidentAccepted } from '../../../utils';
import AcceptButton from '../AcceptButton/AcceptButton';

function FeedServiceActions({ acceptIncident, className, incident, user, viewIncident }) {
  const isIncidentAccpted = checkIfIncidentAccepted(incident, user);
  if (!isIncidentAccpted)
    return (
      <Button
        style={{ marginLeft: 'auto' }}
        onClick={viewIncident}
        className={className}
        size='small'
        variant='contained'
        color='primary'
        endIcon={<InfoOutlinedIcon />}
      >
        Πληροφορίες
      </Button>
    );
  return <AcceptButton acceptIncident={acceptIncident} className={className} />;
}

export default FeedServiceActions;
