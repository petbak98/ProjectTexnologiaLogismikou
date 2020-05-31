import React from 'react';
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { toast } from 'react-toastify';

import { IncidentStepStyles } from './IncidentStep.style';

function IncidentStep({ nextStep, send, updateForm }) {
  const [title, setTitle] = React.useState('');
  const [authority, setAuthority] = React.useState({
    port: false,
    police: false,
    fire: false,
  });
  const [errors, setErrors] = React.useState({
    title: false,
    authority: false,
  });

  function handleChange(e) {
    setErrors({ ...errors, title: false });
    setTitle(e.target.value);
  }

  function handleSelectChange(e) {
    setErrors({ ...errors, authority: false });
    const { name, checked } = e.target;
    setAuthority({ ...authority, [name]: checked });
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
      updateForm({ title, authority });
      send({ type: 'EVENT', nextStep });
    } else {
      toast.error('Συμπλήρωσε όλα τα πεδία');
    }
  }
  const classes = IncidentStepStyles();

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component="legend">
        Τίτλος
      </FormLabel>
      <TextField
        error={errors?.title}
        name="title"
        size="small"
        value={title}
        className={classes.input}
        variant="outlined"
        onChange={handleChange}
        placeholder="Δώσε τίτλο"
      />
      <FormControl component="fieldset">
        <FormLabel className={classes.selectLabel} component="legend">
          Διάλεξε υπηρεσία
        </FormLabel>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={authority.police}
                className={classes.select}
                name="police"
                color="primary"
                onChange={handleSelectChange}
              />
            }
            label="Αστυνομία"
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleSelectChange}
                name="fire"
                checked={authority.fire}
                color="primary"
              />
            }
            label="Πυροσβεστική"
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleSelectChange}
                name="port"
                color="primary"
              />
            }
            label="Λιμενικό"
          />
        </FormGroup>
        {errors.authority && (
          <Typography className={classes.formGroupError}>
            Διάλεξε μια επιλογή
          </Typography>
        )}
      </FormControl>
      <Button
        onClick={handleNext}
        className={classes.button}
        size="large"
        color="primary"
        variant="contained"
        endIcon={<NavigateNextIcon />}
      >
        ΕΠΟΜΕΝΟ
      </Button>
    </div>
  );
}

export default IncidentStep;
