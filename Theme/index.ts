import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#08289A',
    },
  },
  typography: {
    body1: {
      fontSize: '0.875rem !important',
    },
    h4: {
      fontSize: '1.9rem !important',

      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem !important',
    },

    h6: {
      fontSize: '1.1rem !important',
    },
  },
})

export default theme
