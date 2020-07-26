import React from 'react';

import { Dialog } from '@material-ui/core';

import StatisticsForm from '../Statistics/StatisticsForm';

function CloseIncidentDialog({ isOpen, callback }) {
  return (
    <Dialog
      transitionDuration={{ exit: 0 }}
      open={isOpen}
      aria-describedby='alert-dialog-description'
    >
      <div style={{ padding: 15 }}>
        <StatisticsForm handleSubmit={callback} />
      </div>
    </Dialog>
  );
}

export default CloseIncidentDialog;
