import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';

function InfoDialog({ title, content }) {
  return (
    <Dialog open={true} aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{content}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default InfoDialog;
