import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#42a5f5',
    },
    secondary: {
      main: '#26a69a',
    },
    error: {
      main: "#f06292",
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;