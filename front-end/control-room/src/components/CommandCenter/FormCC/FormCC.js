import React from 'react';
import StepWizard from 'react-step-wizard';

import './FormCC.style.css';
import { Typography } from '@material-ui/core';
import { FormStyles } from './FormCC.style';
import IncidentStep from './IncidentStep/IncidentStep';
import StepsNav from '../../StepsNav/StepNav';
import LocationStep from './LocationStep/LocationStep';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import CallerDataStep from './CallerDataStep/CallerDataStep';
import FinalScreen from './FinalScreen/FinalScreen';

export default function FormCC() {
  const [state, send] = useMachine(StepsMachine());
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
          <IncidentStep send={send} />
          <LocationStep />
          <CallerDataStep />
          <FinalScreen />
        </StepWizard>
      </div>
    </>
  );
}

const StepsMachine = () => {
  return Machine({
    id: 'stepsMachine',
    initial: 'idle',
    states: {
      idle: {
        on: {
          EVENT: {
            actions: (_, event) => {
              // console.log(event);
              event.nextStep();
            }
          }
        }
      }
    }
  });
};
