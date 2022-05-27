import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        light: "#b452a2",
        main: "#db40ba",
        darker: "#520047",
        contrastText: "#ffffff"
      },
      secondary: {
        light: "#ab5dd0",
        main: "#822173",
        darker: "#49006f",
        contrastText: "#ffffff"
      }/*,
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },*/
    },
  });