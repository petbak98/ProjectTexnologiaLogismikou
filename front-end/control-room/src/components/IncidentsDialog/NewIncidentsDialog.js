import React from 'react';

import { Dialog, Toolbar, AppBar, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Feed from '../Feed/Feed';

function NewIncidentsDialog({ open, handleClose, newIncidents }) {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar style={{ background: '#BD687E', position: 'relative' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6'>Νέα συμβάντα</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}>
        {newIncidents.incidents.length === 0 ? (
          <Typography variant='h6' align='center'>
            Δεν υπάρχουν καινούρια incidents
          </Typography>
        ) : (
          <Feed incidents={newIncidents.incidents} />
        )}
      </div>
    </Dialog>
  );
}

export default NewIncidentsDialog;
