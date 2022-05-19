import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B1E39',
      light: '#244677',
      dark: '#000F24',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  borderRadius: {
    main: '20px',
    secondary: '10px',
  },
  paddings: {
    main: '1rem',
  },
});

export default theme;
