import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardMedia, IconButton, Slider, Typography, useMediaQuery } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { PauseCircle } from "@mui/icons-material";
import ReactPlayer from 'react-player';

import React from "react";
import FilaMusicas from "./FilaMusicas";
import { MusicaContext } from "../App";

export default function TocadorMusica({ fila }){
    const telaGrande = useMediaQuery('(min-width:900px)');
    const [expanded, setExpanded] = React.useState(false);
    const {musicaAtual, musicaDispatch }= React.useContext(MusicaContext);
    const [tocado, setTocado] = React.useState(0);
    const [mudando, setMudando] = React.useState(false);
    const [segundosTocados, setSegundosTocados] = React.useState(0);
    const [posicaoFila, setPosicaoFila] = React.useState(0);
    
    const reactPlayerRef = React.useRef();

    React.useEffect(() => {
        const indexMusica = fila.filaAtual.findIndex((musicaFila) => musicaFila.id === musicaAtual.musica.id);
        setPosicaoFila(indexMusica);
    }, [musicaAtual.musica.id, fila]);

    React.useEffect(() => {
        const proximaMusica = fila.filaAtual[posicaoFila + 1];
        if(proximaMusica && tocado > 0.99)
            musicaDispatch({ type: "MUDAR_MUSICA", payload: { musica : proximaMusica } });
        else if(!proximaMusica && tocado > 0.99 && tocado)
            musicaDispatch({ type:  "PAUSAR_MUSICA" });
    }, [tocado]);


    function handleChange(){
      setExpanded(!expanded);
    };

    function handleBotaoTocar(){
        musicaDispatch({ type:  musicaAtual.estaTocando ? "PAUSAR_MUSICA" : "TOCAR_MUSICA" });
    }

    function handleProgressoMusica({ played, playedSeconds }){
        if(!mudando) 
            setTocado(played);
        setSegundosTocados(playedSeconds);
    }

    function handleSliderAlterando() {
        setMudando(true);
    }

    function handleSliderAlterado(){
        setMudando(false);
    }

    function handleSliderAlterar(event, newValue) {
        setTocado(newValue);
        reactPlayerRef.current.seekTo(tocado);
    }


    //Controles de fila
    function handleMusicaAnterior(){
        const musicaAnterior = fila.filaAtual[posicaoFila - 1];
        if(musicaAnterior)
            musicaDispatch({ type: "MUDAR_MUSICA", payload: { musica : musicaAnterior } });
    }

    function handleProximaMusica(){
        const proximaMusica = fila.filaAtual[posicaoFila + 1];
        if(proximaMusica)
            musicaDispatch({ type: "MUDAR_MUSICA", payload: { musica : proximaMusica } });
    }

    return (
        <div style={ !telaGrande ? { zIndex : "2" } : { }}>
            <Card style={{ display: 'flex', flexDirection : 'column' }} >
                <div style={{ display: 'flex', justifyContent : 'space-between'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">{ musicaAtual.musica.titulo }</Typography>
                        <Typography variant="subtitle1" component="h3">{ musicaAtual.musica.artista }</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton  onClick={handleMusicaAnterior}>
                            <SkipPreviousIcon/>
                        </IconButton>
                        <IconButton onClick={handleBotaoTocar}>
                            {  musicaAtual.estaTocando ? <PauseCircle style={{fontSize : "40px"}}/> :  <PlayArrowIcon style={{fontSize : "40px"}}/>  }
                        </IconButton>
                        <IconButton onClick={handleProximaMusica}>
                            <SkipNextIcon/>
                        </IconButton>
                        <Typography>
                            { new Date(segundosTocados * 1000).toISOString().substr(11, 8) }
                        </Typography>
                        {
                            !telaGrande &&
                            <IconButton onClick={() => handleChange()}><QueueMusicIcon/></IconButton>
                        }
                    </CardActions>
                    <CardMedia image={ musicaAtual.musica.thumbnail } style={{ objectFit: 'cover', width: '120px', height: '120px' }}/>
                </div>
                <Slider key="slider" type="range" min={0} max={1} step={0.01} sx={{ width: '90%', m:'auto' }} value={tocado}
                    onChange={handleSliderAlterar} onMouseDown={handleSliderAlterando} onMouseUp={handleSliderAlterado}
                ></Slider>
                <ReactPlayer ref={reactPlayerRef} hidden url={musicaAtual.musica.url} playing={musicaAtual.estaTocando} onProgress={handleProgressoMusica}/>
            </Card>
            {
                telaGrande ?
                <FilaMusicas fila={fila}/> 
                :
                <Accordion expanded={expanded} onChange={() =>  handleChange()} style={ !expanded ? { display: 'none', transition: 'all 1s ease' } : { transition: 'all 1s ease' }  }>
                  <AccordionSummary aria-controls="filaMusicasbh-content"  id="filaMusicasbh-header" style={{ minHeight: '0px', height : '0px' }}>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FilaMusicas fila={fila}/> 
                  </AccordionDetails>
                </Accordion>

            }
        </div>
    )
}