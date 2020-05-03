import { makeStyles } from '@material-ui/core/styles';

export const FinalScreenStyles = makeStyles((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },

    icon: {
      margin: '0 auto',
      fill: theme.palette.primary.main,
      width: 420,
      height: 320,
      borderRadius: theme.shape.borderRadius
    }
  };
});
