import React from 'react';

import { Typography } from '@material-ui/core';
import { useMachine } from '@xstate/react';
import { useMutation } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import StepWizard from 'react-step-wizard';
import { toast } from 'react-toastify';
import { Machine } from 'xstate';

import './FormCC.style.css';
import { useAuthService } from '../../../hooks/useAuth';
import useQuerySuccess from '../../../hooks/useQuerySuccess';
import { createIncident, editIncident } from '../../../services/services';
import Loading from '../../Loading/Loading';
import StepsNav from '../../StepsNav/StepNav';
import CallerDataStep from './CallerDataStep/CallerDataStep';
import FinalScreen from './FinalScreen/FinalScreen';
import { FormStyles } from './FormCC.style';
import IncidentStep from './IncidentStep/IncidentStep';
import LocationStep from './LocationStep/LocationStep';

const StepsMachine = Machine({
  id: 'stepsMachine',
  initial: 'idle',
  states: {
    idle: {
      on: {
        EVENT: {
          actions: (_, event) => {
            event.nextStep();
          },
        },
      },
    },
  },
});

export default function FormCC() {
  const [, send] = useMachine(StepsMachine);
  const history = useHistory();
  const [state] = useAuthService();
  const coordinatorId = state.context.user.id;
  const location = useLocation();
  const incident = location.state?.incident;
  window.history.pushState(null, '');
  const editStrategy = incident ? true : false;
  Object.freeze(editStrategy);
  const [mutate, { status, error }] = useMutation(editStrategy ? editIncident : createIncident);
  const [form, setForm] = React.useState(editStrategy ? incident : {});
  function updateForm(newValues) {
    setForm({ ...form, ...newValues });
  }

  useQuerySuccess(status, () => {
    history.push('/incidents');
  });

  async function handleSubmit(lastStepFormState) {
    try {
      const requestParams = {
        ...form,
        status: {
          id: 1,
        },
        coordinatorId,
        ...lastStepFormState,
      };
      updateForm(lastStepFormState);
      await mutate(requestParams);
    } catch (error) {
      console.log('error');
    }
  }
  const classes = FormStyles();

  if (status === 'loading') return <Loading />;
  if (error) return <div>Something wrong happened</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <Typography className={classes.title} align='center' variant='h6'>
        {editStrategy ? 'Επεξεργασία Συμβάντος' : 'Προσθήκη Συμβάντος'}
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
            exitLeft: 'exit',
          }}
        >
          <IncidentStep editProps={form} updateForm={updateForm} send={send} />
          <LocationStep editProps={form} updateForm={updateForm} />
          <CallerDataStep editProps={form} updateForm={updateForm} handleSubmit={handleSubmit} />
          <FinalScreen />
        </StepWizard>
      </div>
    </div>
  );
}
