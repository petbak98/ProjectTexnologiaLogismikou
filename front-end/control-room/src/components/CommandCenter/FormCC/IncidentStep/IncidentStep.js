import React from 'react';

import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Typography,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { toast } from 'react-toastify';

import Stars from '../../../Stars/Stars';
import { IncidentStepStyles } from './IncidentStep.style';

function IncidentStep({ nextStep, send, updateForm, editProps }) {
  const [title, setTitle] = React.useState(editProps?.title || '');
  const [authority, setAuthority] = React.useState(
    editProps.authority ? String(editProps?.authority.id) : '1',
  );
  const [importance, setImportance] = React.useState(1);
  const [errors, setErrors] = React.useState({
    title: false,
    authority: false,
  });

  function handleChange(e) {
    setErrors({ ...errors, title: false });
    setTitle(e.target.value);
  }

  function handleAuthorityChange(e) {
    setErrors({ ...errors, authority: false });
    setAuthority(e.target.value);
  }

  function handleStarsUpdate(value) {
    setImportance(value);
  }

  function isValid() {
    const err = { title: false, authority: false };
    if (!title) {
      err.title = true;
    }
    const completed = Object.values(authority).filter((value) => value);
    if (!completed.length) err.authority = true;
    setErrors(err);
    if (!err.title && !err.authority) return true;
    return false;
  }
  function handleNext() {
    const valid = isValid({ title, authority });
    if (valid) {
      updateForm({ title, authority: { id: Number(authority) }, importance: { id: importance } });
      send({ type: 'EVENT', nextStep });
    } else {
      toast.error('Συμπλήρωσε όλα τα πεδία');
    }
  }
  const classes = IncidentStepStyles();

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component='legend'>
        Τίτλος
      </FormLabel>
      <TextField
        error={errors?.title}
        name='title'
        size='small'
        value={title}
        className={classes.input}
        variant='outlined'
        onChange={handleChange}
        placeholder='Δώσε τίτλο'
      />
      <FormControl component='fieldset'>
        <FormLabel className={classes.selectLabel} component='legend'>
          Διάλεξε υπηρεσία
        </FormLabel>
        <RadioGroup
          className={classes.formGroup}
          value={authority}
          onChange={handleAuthorityChange}
        >
          <FormControlLabel
            value='1'
            control={<Radio className={classes.select} color='primary' />}
            label='Αστυνομία'
          />
          <FormControlLabel
            value='2'
            control={<Radio className={classes.select} color='primary' />}
            label='Πυροσβετική'
          />
          <FormControlLabel
            value='3'
            control={<Radio className={classes.select} color='primary' />}
            label='Εκάβ'
          />
          <FormControlLabel
            value='4'
            control={<Radio className={classes.select} color='primary' />}
            label='Λιμενικό'
          />
        </RadioGroup>
        {errors.authority && (
          <Typography className={classes.formGroupError}>Διάλεξε μια επιλογή</Typography>
        )}
      </FormControl>
      <FormLabel className={classes.starsLabel} component='legend'>
        Σημασία
      </FormLabel>
      <Stars size='large' startsCount={importance} handleClick={handleStarsUpdate} />
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
