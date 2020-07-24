import React from 'react';

import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

function ConfirmationDialog({ message, callback, close, isOpen }) {
  function handleClose() {
    callback();
    close();
  }

  return (
    <Dialog
      transitionDuration={{ exit: 0 }}
      open={isOpen}
      aria-describedby='alert-dialog-description'
    >
      <div style={{ padding: 15 }}>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color='primary'>
            Οχι
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={handleClose}
            color='primary'
            autoFocus
          >
            Ναι
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default ConfirmationDialog;
