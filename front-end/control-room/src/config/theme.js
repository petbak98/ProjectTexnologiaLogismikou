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
    third: {
      main: '#7B5275'
    }
  },
  spacing: 4
});

export default theme;
