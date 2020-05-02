import { makeStyles } from '@material-ui/core/styles';

export const FormStyles = makeStyles((theme) => {
  return {
    title: {
      color: theme.palette.primary.main,
      paddingTop: theme.spacing(5)
    },
    container: {
      margin: '0 auto',
      borderTop: `4px solid ${theme.palette.primary.main}`,
      marginTop: theme.spacing(5),
      maxWidth: '100%',
      color: theme.palette.primary.main,
      width: 1000,
      padding: theme.spacing(5),
      boxShadow: theme.shadows[10]
    }
  };
});
