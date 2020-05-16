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

function IncidentStep({ nextStep, send, updateForm }) {
  const [title, setTitle] = React.useState('');
  const [authority, setAuthority] = React.useState({ port: false, police: false, fire: false });

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSelectChange(e) {
    const { name, checked } = e.target;
    setAuthority({ ...authority, [name]: checked });
  }

  function handleNext() {
    updateForm({ title, authority });
    send({ type: 'EVENT', nextStep });
  }
  const classes = IncidentStepStyles();

  return (
    <div className={classes.container}>
      <FormLabel className={classes.selectLabel} component='legend'>
        Τίτλος
      </FormLabel>
      <TextField
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
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={authority.police}
                className={classes.select}
                name='police'
                color='primary'
                onChange={handleSelectChange}
              />
            }
            label='Αστυνομία'
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleSelectChange}
                name='fire'
                checked={authority.fire}
                color='primary'
              />
            }
            label='Πυροσβεστική'
          />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.select}
                onChange={handleSelectChange}
                name='port'
                checked={authority.port}
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
