import React from 'react';
import { FormLabel, TextField, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { LocationStepStyles } from './LocationStep.style';

function LocationStep({ nextStep, previousStep }) {
  function handleNext() {
    nextStep();
  }
  function handlePrevious() {
    previousStep();
  }

  const classes = LocationStepStyles();

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component='legend'>
        Πόλη
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Αθήνα'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Περιοχή
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Αγία Παρασκευή'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Οδός
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Πανεπιστημίου 45'
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

export default LocationStep;
