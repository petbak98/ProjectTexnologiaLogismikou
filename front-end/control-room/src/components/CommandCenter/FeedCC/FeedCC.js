import React from 'react';
import Feed from '../../Feed/Feed';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { feedCCStyle } from './FeedCC.style';
import SearchIcon from '@material-ui/icons/Search';

const incidents = [
  {
    date: '21-4-202',
    adress: 'Πευκάκια 5',
    title: 'Πυρκαγιά',
    id: 12456,
    type: 'firefighting',
    related: ['Πυροσβεστική']
  },
  {
    date: '22-4-202',
    adress: 'Χλόης 5',
    title: 'Ληστεία',
    id: 12457,
    type: 'police',
    related: ['Αστυνομία']
  },

  {
    date: '22-4-202',
    adress: 'Κατίνας Παξινού 10',
    title: 'Πυρκαγιά',
    id: 12458,
    type: 'firefighting',
    related: ['Πυροσβεστική', 'Αστυνομία']
  }
];
export default function FeedCC() {
  const classes = feedCCStyle();
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
