import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F3C56'
    },
    secondary: {
      main: '#9c9ba8'
    },
    warning: {
      main: '#F08A74'
    },
    purple: {
      main: '#BD687E',
      light: '#eed9df'
    },
    error: {
      main: '#BD687E'
    },
    third: {
      main: '#7B5275'
    },
    green: {
      dark: '#436551',
      main: '#85BAA1',
      light: '#a5d6c1'
    }
  },
  spacing: 4
});

export default theme;
