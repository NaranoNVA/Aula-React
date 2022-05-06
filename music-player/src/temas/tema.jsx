import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        light: "#b452a2",
        main: "#822173",
        darker: "#520047",
        contrastText: "#ffffff"
      },
      secondary: {
        light: "#ab5dd0",
        main: "#792e9e",
        darker: "#49006f",
        contrastText: "#ffffff"
      }/*,
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },*/
    },
  });