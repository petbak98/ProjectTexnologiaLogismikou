import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { FormLabel, TextField, Button } from '@material-ui/core';

import { CallerDataStyles } from './CallerDataStep.style';

function CallerDataStep({ previousStep, nextStep }) {
  const classes = CallerDataStyles();

  function handleNext() {
    nextStep();
  }
  function handlePrevious() {
    previousStep();
  }

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component='legend'>
        Όνομα
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Παναγιώτης'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Επώνυμο
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. Τσίπρας'
      />
      <FormLabel className={classes.selectLabel} component='legend'>
        Ταυτότητα
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='π.χ. ΑΕ10440'
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
