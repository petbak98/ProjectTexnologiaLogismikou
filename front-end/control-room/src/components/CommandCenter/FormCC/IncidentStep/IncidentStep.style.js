import { makeStyles } from '@material-ui/core/styles';

export const IncidentStepStyles = makeStyles((theme) => {
  return {
    container: {
      flexDirection: 'column',
      display: 'flex'
    },
    input: {
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down('sm')]: {
        width: '95%'
      },
      width: 500
    },
    selectLabel: {
      marginBottom: theme.spacing(1),
      fontWeight: theme.typography.fontWeightBold
    },
    select: {
      paddingTop: 0,
      paddingBottom: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(8),
      marginLeft: 'auto'
    },
    formGroup: {
      position: 'relative'
    },
    formGroupError: {
      position: 'absolute',
      color: theme.palette.purple.main,
      left: theme.spacing(0),
      bottom: -20
    }
  };
});
