import React from 'react';

import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useIncidents from '../../../hooks/useIncidents';
import ErrorComponent from '../../Error/ErrorComponent';
import Feed from '../../Feed/Feed';
import Loading from '../../Loading/Loading';
import { feedCCStyle } from './FeedCC.style';

export default function FeedCC() {
  const { status, data: incidents } = useIncidents();
  const classes = feedCCStyle();
  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorComponent />;
  return (
    <div className={classes.container}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ zIndex: 100 }}
        placeholder='π.χ 12325'
        variant='outlined'
        id='input-with-icon-textfield'
        label='Ανάζητηση'
        className={classes.search}
      />
      <Feed incidents={incidents} />
    </div>
  );
}
