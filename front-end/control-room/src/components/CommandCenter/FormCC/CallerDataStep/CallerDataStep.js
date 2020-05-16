import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { FormLabel, TextField, Button } from '@material-ui/core';
import { CallerDataStyles } from './CallerDataStep.style';

function CallerDataStep({ previousStep, nextStep, updateForm }) {
  const classes = CallerDataStyles();
  const [formState, setFormState] = React.useState({
    callerFirstName: '',
    callerLastName: '',
    callerPhone: '',
    callerNationalId: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleNext() {
    updateForm(formState);
    nextStep();
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
        onChange={handleChange}
        value={formState.callerPhone}
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. 2102596392'
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
          ΕΠΟΜΕΝΟ
        </Button>
      </div>
    </div>
  );
}

export default CallerDataStep;
