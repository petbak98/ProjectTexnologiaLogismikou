import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => {
  return {
    container: {
      display: 'flex'
    },
    errorContainer: {
      display: 'flex',
      color: theme.palette.purple.main
    }
  };
});
export default function LocationStepInfo({ label, content }) {
  const classes = styles();
  return (
    <div className={content ? classes.container : classes.errorContainer}>
      <Typography style={{ fontWeight: 700 }}>{`${label} :`}</Typography>
      <Typography style={{ marginLeft: 5 }}>{content}</Typography>
    </div>
  );
}
