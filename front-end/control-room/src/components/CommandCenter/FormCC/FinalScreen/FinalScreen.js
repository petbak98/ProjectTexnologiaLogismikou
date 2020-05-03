import React from 'react';

import { ReactComponent as SuccessIcon } from '../../../../assets/icons/done.svg';
import { FinalScreenStyles } from './FinalScreen.style';
import { Typography } from '@material-ui/core';

function FinalScreen() {
  const classes = FinalScreenStyles();

  return (
    <div className={classes.container}>
      <SuccessIcon className={classes.icon} />
    </div>
  );
}

export default FinalScreen;
