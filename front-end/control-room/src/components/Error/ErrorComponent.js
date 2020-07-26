import React from 'react';

import { Typography } from '@material-ui/core';

function ErrorComponent() {
  return (
    <div
      style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography variant='h5' color='primary' align='center'>
        Κάτι πήγε σταβά
      </Typography>
    </div>
  );
}

export default ErrorComponent;
