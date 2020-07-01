import React from 'react';

import { Typography } from '@material-ui/core';
import { useMachine } from '@xstate/react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import StepWizard from 'react-step-wizard';
import { toast } from 'react-toastify';
import { Machine } from 'xstate';

import './FormCC.style.css';
import { useAuthService } from '../../../hooks/useAuth';
import { createIncident } from '../../../services/services';
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
            // console.log(event);
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
  const [form, setForm] = React.useState({});
  const [state] = useAuthService();
  const [mutate, { status, error }] = useMutation(createIncident);
  const coordinatorId = state.context.user.id;

  function updateForm(newValues) {
    setForm({ ...form, ...newValues });
  }

  React.useEffect(() => {
    if (status === 'success') {
      toast.success('Επιτυχής καταχώρηση');
      history.push('/incidents');
    }
  }, [status, history]);

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
            exitLeft: 'exit',
          }}
        >
          <IncidentStep updateForm={updateForm} send={send} />
          <LocationStep updateForm={updateForm} />
          <CallerDataStep updateForm={updateForm} handleSubmit={handleSubmit} />
          <FinalScreen />
        </StepWizard>
      </div>
    </>
  );
}

const temp = {
  coordinatorId: 1,
  title: 'Pyrkagia',
  authority: {
    id: 1,
  },
  importance: {
    id: 1,
  },
  city: 'Halandri',
  number: '6',
  postalCode: '15234',
  region: 'Attiki',
  street: 'Olumpoy 60',
  callerFirstName: 'petros',
  callerLastName: 'bakolas',
  callerNationalId: 'AK123456',
  callerPhone: '69802314567',
  status: {
    id: 1,
  },
  notes: 'lelelelel',
};
