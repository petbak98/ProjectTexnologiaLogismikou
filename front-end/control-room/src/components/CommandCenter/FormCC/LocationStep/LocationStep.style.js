import { makeStyles } from '@material-ui/core/styles';

export const LocationStepStyles = makeStyles((theme) => {
  return {
    container: {
      flexDirection: 'column',
      display: 'flex'
    },
    input: {
      [theme.breakpoints.down('sm')]: {
        width: '95%'
      },
      width: 500
    },
    selectLabel: {
      marginBottom: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightBold
    },
    select: {
      paddingTop: 0,
      paddingBottom: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(5),
      marginLeft: 'auto'
    },
    dropdown: {
      marginTop: theme.spacing(2),
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        width: '95%'
      },
      width: 500,
      background: '#fff'
    },
    dropdownItem: {
      position: 'relative',
      cursor: 'pointer',
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[1],
      padding: theme.spacing(3),
      paddingLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      borderRadius: theme.shape.borderRadius
    },
    infoContainer: {
      [theme.breakpoints.down('sm')]: {
        width: '95%'
      },
      width: 500,
      borderTop: `2px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(3),
      boxShadow: theme.shadows[2]
    },
    infoLabel: {
      marginTop: theme.spacing(4),
      color: '#737373',
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.subtitle1
    },
    locationSvg: {
      position: 'absolute',
      right: 10,
      top: '10',
      width: 20,
      height: 20,
      fill: theme.palette.primary.main
    }
  };
});
