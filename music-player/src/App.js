
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./temas/tema";
import AdicionarMusica from "./components/AdicionarMusica";
import Cabecalho from "./components/Cabecalho";
import ListaMusicas from "./components/ListaMusicas";
import TocadorMusica from "./components/TocadorMusica";
import { Grid, useMediaQuery } from "@mui/material";
import { filaReducer, musicaReducer } from "./reducer";

export const MusicaContext = React.createContext({
  musica : {
    id: "baa31316-1095-4d88-a5c9-a6f8a7a7c048",
    titulo: "end of a life",
    artista: "Calliope Mori",
    thumbnail: "http://img.youtube.com/vi/BXB26PzV31k/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=BXB26PzV31k",
    duracao: 289
  },
  estaTocando : false
});

export default function App() {
  const telaGrande = useMediaQuery('(min-width:900px)');
  const musicaInicial = React.useContext(MusicaContext);
  const [filaAtual, filaAtualDispatch] = React.useReducer(filaReducer, []);
  const [musicaAtual, musicaDispatch] = React.useReducer(musicaReducer, musicaInicial);

  return (
    <ThemeProvider theme={theme}>
      <MusicaContext.Provider value={{musicaAtual, musicaDispatch}}>
        <Cabecalho/>
        <Grid container mt={10}>
          <Grid item md={7} xs={12} pl={2}>
            <AdicionarMusica />
            <ListaMusicas fila={{filaAtualDispatch}}/>
          </Grid>
          <Grid item md={5} xs={12} px={2} style={
            telaGrande ? 
            { position: 'fixed', width:'100%', right: 10, top: 80 } :
            { position: 'fixed', width:'100%', left: 0, bottom: 10 }
          }>
            <TocadorMusica fila={{filaAtual, filaAtualDispatch}}/>
          </Grid>
        </Grid>
      </MusicaContext.Provider>
    </ThemeProvider>
  );
}
