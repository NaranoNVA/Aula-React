
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./temas/tema";
import AdicionarMusica from "./components/AdicionarMusica";
import Cabecalho from "./components/Cabecalho";
import ListaMusicas from "./components/ListaMusicas";
import TocadorMusica from "./components/TocadorMusica";
import { Grid, useMediaQuery } from "@mui/material";

export default function App() {
  const telaGrande = useMediaQuery('(min-width:900px)');

  return (
    <ThemeProvider theme={theme}>
      <Cabecalho/>
      <Grid container mt={10}>
        <Grid item md={7} xs={12} pl={2}>
          <AdicionarMusica />
          <ListaMusicas />
        </Grid>
        <Grid item md={5} xs={12} px={2} style={
          telaGrande ? 
          { position: 'fixed', width:'100%', right: 10, top: 80 } :
          { position: 'fixed', width:'100%', left: 0, bottom: 10 }
        }>
          
          <TocadorMusica/>
        </Grid>
      </Grid>  
    </ThemeProvider>
  );
}
