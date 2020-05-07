import React from 'react';
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { IncidentStepStyles } from './IncidentStep.style';

function IncidentStep({ nextStep, send }) {
  function handleChange() {}
  function handleNext() {
    console.log('next');
    send({ type: 'EVENT', nextStep });
  }
  const classes = IncidentStepStyles();

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component='legend'>
        Τίτλος
      </FormLabel>
      <TextField
        size='small'
        className={classes.input}
        variant='outlined'
        placeholder='Δώσε τίτλο'
      />
      <FormControl component='fieldset'>
        <FormLabel className={classes.selectLabel} component='legend'>
          Διάλεξε υπηρεσία
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleChange}
                name='gilad'
                color='primary'
              />
            }
            label='Αστυνομία'
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleChange}
                name='jason'
                color='primary'
              />
            }
            label='Πυροσβεστική'
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleChange}
                name='antoine'
                color='primary'
              />
            }
            label='Λιμενικό'
          />
        </FormGroup>
      </FormControl>
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
  );
}

export default IncidentStep;
