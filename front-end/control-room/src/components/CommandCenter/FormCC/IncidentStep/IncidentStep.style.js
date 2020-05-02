import { makeStyles } from '@material-ui/core/styles';

export const IncidentStepStyles = makeStyles((theme) => {
  return {
    container: {
      flexDirection: 'column',
      display: 'flex'
    },
    input: {
      marginBottom: theme.spacing(8),
      width: '50%'
    },
    selectLabel: {
      marginBottom: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium
    },
    select: {
      paddingTop: 0,
      paddingBottom: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(5),
      marginLeft: 'auto'
    }
  };
});
