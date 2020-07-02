import React from 'react';

import { FormLabel, TextField, Button } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { toast } from 'react-toastify';

import { CallerDataStyles } from './CallerDataStep.style';

function CallerDataStep({ previousStep, nextStep, updateForm, editProps, handleSubmit }) {
  const classes = CallerDataStyles();
  const [formState, setFormState] = React.useState({
    callerFirstName: editProps?.callerFirstName || '',
    callerLastName: editProps?.callerLastName || '',
    callerPhone: editProps?.callerPhone || '',
    callerNationalId: editProps?.callerNationalId || '',
    notes: editProps?.notes || '',
  });
  const [error, setError] = React.useState({
    callerFirstName: false,
    callerLastName: false,
    callerPhone: false,
    callerNationalId: false,
    notes: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setError({ ...error, [name]: false });
  }

  function isValid() {
    const err = Object.keys(formState).reduce((acc, cur) => {
      return formState[cur] ? { ...acc, [cur]: false } : { ...acc, [cur]: true };
    }, {});
    setError(err);
    return !Object.values(err).filter((value) => value).length;
  }

  function handleNext() {
    const valid = isValid();
    if (valid) {
      handleSubmit(formState);
    } else {
      toast.error('Συμπλήρωσε όλα τα πεδία');
    }
  }
  function handlePrevious() {
    updateForm(formState);
    previousStep();
  }

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component='legend'>
        Όνομα
      </FormLabel>
      <TextField
        error={error.callerFirstName}
        size='small'
        name='callerFirstName'
        className={classes.input}
        variant='outlined'
        value={formState.callerFirstName}
        onChange={handleChange}
        placeholder='π.χ. Παναγιώτης'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Επώνυμο
      </FormLabel>
      <TextField
        onChange={handleChange}
        error={error.callerLastName}
        value={formState.callerLastName}
        size='small'
        name='callerLastName'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Τσίπρας'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Ταυτότητα
      </FormLabel>
      <TextField
        error={error.callerNationalId}
        onChange={handleChange}
        name='callerNationalId'
        value={formState.callerNationalId}
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. ΑΕ10440'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Τηλέφωνο
      </FormLabel>
      <TextField
        name='callerPhone'
        error={error.callerPhone}
        onChange={handleChange}
        value={formState.callerPhone}
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. 2102596392'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Σημειώσεις
      </FormLabel>
      <TextField
        name='notes'
        error={error.notes}
        onChange={handleChange}
        value={formState.notes}
        size='small'
        multiline={true}
        rows={4}
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Γείτονας που παρατήρησε το συμβάν'
      />
      <div style={{ marginLeft: 'auto' }}>
        <Button
          style={{ marginRight: 5 }}
          onClick={handlePrevious}
          className={classes.button}
          size='large'
          color='primary'
          variant='text'
          startIcon={<NavigateBeforeIcon />}
        >
          ΠΡΟΗΓΟΥΜΕΝΟ
        </Button>
        <Button
          onClick={handleNext}
          className={classes.button}
          size='large'
          color='primary'
          variant='contained'
          endIcon={<NavigateNextIcon />}
        >
          Καταχωρηση
        </Button>
      </div>
    </div>
  );
}

export default CallerDataStep;
