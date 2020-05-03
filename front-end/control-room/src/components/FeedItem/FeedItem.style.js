import { makeStyles } from '@material-ui/core/styles';

export const feedItemStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      position: 'relative',
      background: theme.palette.grey[20],
      listStyle: 'none',
      padding: theme.spacing(2),
      borderLeft: `3px solid ${theme.palette.primary.main} `,
      width: 300,
      color: theme.palette.primary.main,
      boxShadow: `${theme.shadows[3]}`,
      borderRadius: theme.shape.borderRadius,
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    feedLi: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      fontWeight: theme.typography.fontWeightBold
    },
    fireIcon: {
      marginLeft: theme.spacing(2),
      color: theme.palette.warning.main
    },
    dateIcon: {
      color: theme.palette.primary.main,
      marginLeft: theme.spacing(2)
    },
    chips: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3)
    },
    chip: {
      color: '#fff',
      marginRight: theme.spacing(1),
      background: theme.palette.grey[400]
    },
    locationIcon: {
      marginLeft: theme.spacing(2),
      color: theme.palette.purple.main
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    chipsContainer: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.palette.primary.main}`
    },
    avatarContainer: {
      position: 'absolute',
      opacity: 0.9,
      top: '0',
      right: '50%',
      borderRadius: 600,
      transform: 'translateY(-50%) translateX(50%)',
      width: 70,
      padding: theme.spacing(2),
      height: 70,
      boxShadow: theme.shadows[5],
      border: `2px solid ${theme.palette.primary.main}`
    },
    id: {
      fontWeight: theme.typography.fontWeightBold,
      position: 'absolute',
      top: 0,
      right: 0,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(5)
    },
    avatar: {
      width: '100%',
      height: '100%'
    },
    button: {
      display: 'flex',
      marginTop: theme.spacing(8),
      marginLeft: 'auto',
      textTransform: 'none'
    }
  };
});
