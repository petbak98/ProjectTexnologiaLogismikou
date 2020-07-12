import React from 'react';

import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

function AcceptButton({ acceptIncident, className }) {
  return (
    <Button
      style={{ marginLeft: 'auto' }}
      onClick={acceptIncident}
      className={className}
      size='small'
      variant='outlined'
      color='primary'
      endIcon={<CheckIcon />}
    >
      Αποδοχή
    </Button>
  );
}

export default AcceptButton;
