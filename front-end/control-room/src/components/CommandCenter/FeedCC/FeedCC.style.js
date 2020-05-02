import { makeStyles } from '@material-ui/core/styles';

export const feedCCStyle = makeStyles((theme) => {
  return {
    container: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10)
    },
    search: {
      minWidth: 300,
      maxWidth: '100%',
      margin: `${theme.spacing(6)}px 0 `
    },
    button: {
      display: 'block',
      textTransform: 'none',
      margin: `${theme.spacing(10)}px 0 `
    }
  };
});
