import React from 'react';
import StepWizard from 'react-step-wizard';

import './FormCC.style.css';
import { Typography } from '@material-ui/core';
import { FormStyles } from './FormCC.style';
import IncidentStep from './IncidentStep/IncidentStep';
import StepsNav from '../../StepsNav/StepNav';

export default function FormCC() {
  const classes = FormStyles();
  return (
    <>
      <Typography className={classes.title} align='center' variant='h6'>
        Προσθήκη Συμβάντος
      </Typography>
      <div className={classes.container}>
        <StepWizard
          nav={<StepsNav />}
          isLazyMount={false}
          initialStep={1}
          transitions={{
            enterRight: 'enter',
            enterLeft: 'enter',
            exitRight: 'exit',
            exitLeft: 'exit'
          }}
        >
          <IncidentStep />
        </StepWizard>
      </div>
    </>
  );
}
