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
  const [query, setQuery] = React.useState('');
  const classes = feedCCStyle();

  const filteredIncidents = React.useMemo(() => {
    if (query.trim().length === 0 || !incidents) return incidents;
    return incidents.filter((incident) => {
      const queryNumberFormat = Number(query);
      if (incident.incidentId === queryNumberFormat) return true;
      return false;
    });
  }, [incidents, query]);

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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ zIndex: 100 }}
        placeholder='Αναζήτησε με βάση τον κωδικό'
        variant='outlined'
        id='input-with-icon-textfield'
        label='Ανάζητηση'
        className={classes.search}
      />
      <Feed incidents={filteredIncidents} />
    </div>
  );
}
