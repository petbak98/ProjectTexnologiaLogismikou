import React from 'react';
import { TextField, Button, InputAdornment } from '@material-ui/core';

import Feed from '../../Feed/Feed';
import { feedCCStyle } from './FeedCC.style';
import SearchIcon from '@material-ui/icons/Search';
import useIncidents from '../../../hooks/useIncidents';
import Loading from '../../Loading/Loading';

export default function FeedCC() {
  const { status, data: incidents, error } = useIncidents();
  const classes = feedCCStyle();

  if (status === 'loading') return <Loading />;

  if (status === 'error') return <div>Κάτι πήγε στραβά</div>;

  return (
    <div className={classes.container}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
        placeholder='π.χ 12325'
        variant='outlined'
        id='input-with-icon-textfield'
        label='Ανάζητηση'
        className={classes.search}
      />
      <Feed incidents={incidents} />
      {/* <Button className={classes.button} variant='contained' color='primary'>
        Περισσότερα
      </Button> */}
    </div>
  );
}
