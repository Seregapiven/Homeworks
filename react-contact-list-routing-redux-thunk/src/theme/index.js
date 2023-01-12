import { createTheme } from '@mui/material';
import palette from './palette';

export default createTheme({
  palette,
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});