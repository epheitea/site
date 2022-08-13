import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './home';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Calibri'
    },
    h3: {
      fontFamily: 'Segoe UI',
      marginBottom: '5px'
    },
    h5: {
      fontFamily: 'Segoe UI'
    }
  },
  palette: {
    primary: {
      main: '#1c1c1c',
      light: '#acaea9',
      dark: '#acaea9'
    },
    secondary: {
      main: '#dedfdd',
      light: '#dedfdd',
      dark: '#dedfdd'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
