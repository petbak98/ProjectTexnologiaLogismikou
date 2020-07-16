import React from 'react';

import { Grid, Typography, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Edit from '@material-ui/icons/Edit';

import theme from '../../config/theme';

const reportStyles = makeStyles((theme) => {
  return {
    report: {
      padding: theme.spacing(2),
      boxShadow: `${theme.shadows[1]}`,
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.palette.primary.main} `,
    },
    editIcon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(50%)',
    },
  };
});

export default function Report({ report, userId }) {
  const isOwner = report.userId === userId;
  const classes = reportStyles();
  const { incidentTitle, lastUpdate, userName, content } = report;
  const parsedDate = lastUpdate.substring(0, 10);
  return (
    <Grid
      className={classes.report}
      container
      wrap='nowrap'
      style={{
        marginRight: 'auto',
        marginBottom: 10,
        position: 'relative',
      }}
      justify='flex-start'
    >
      <Avatar style={{ marginRight: 15 }} alt={userName}>
        {userName[0]}
      </Avatar>
      {isOwner && (
        <Button
          className={classes.editIcon}
          style={{ position: 'absolute', right: 0, top: 5 }}
          onClick={() => {}}
          size='medium'
          variant='text'
          color='primary'
          endIcon={<Edit />}
        >
          {' '}
        </Button>
      )}

      <Grid container direction='column'>
        <Typography style={{ fontWeight: 'bold' }} component='h1'>
          {incidentTitle}
        </Typography>
        <Typography component='section'>{content}</Typography>
        <Grid container style={{ marginTop: 5 }}>
          <Typography color='textSecondary' style={{ fontSize: 15 }}>
            {parsedDate}
          </Typography>
          <Typography color='textSecondary' style={{ fontSize: 15, paddingLeft: 20 }}>
            by {userName}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
