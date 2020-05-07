import { makeStyles } from '@material-ui/core/styles';

export const feedCCStyle = makeStyles((theme) => {
  return {
    container: {
      paddingRight: theme.spacing(8),
      paddingLeft: theme.spacing(8)
    },
    search: {
      marginTop: theme.spacing(8),
      width: '100%'
    },
    button: {
      // display: 'block',
      textTransform: 'none'
      // margin: `${theme.spacing(10)}px 0 `
    }
  };
});
