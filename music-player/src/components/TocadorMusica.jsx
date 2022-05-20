import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardMedia, IconButton, Slider, Typography, useMediaQuery } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { PauseCircle } from "@mui/icons-material";

import React from "react";
import FilaMusicas from "./FilaMusicas";
import { MusicaContext } from "../App";

export default function TocadorMusica({ fila }){
    const telaGrande = useMediaQuery('(min-width:900px)');
    const [expanded, setExpanded] = React.useState(false);
    const {musicaAtual, musicaDispatch }= React.useContext(MusicaContext);
    function handleChange(){
      setExpanded(!expanded);
    };

    function handleBotaoTocar(){
        musicaDispatch({ type:  musicaAtual.estaTocando ? "PAUSAR_MUSICA" : "TOCAR_MUSICA" });
        //musicaDispatch({ type: "TOCAR_MUSICA" });
    }

    console.log(fila);

    return (
        <div style={ !telaGrande ? { zIndex : "2" } : { }}>
            <Card style={{ display: 'flex', flexDirection : 'column' }} >
                <div style={{ display: 'flex', justifyContent : 'space-between'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">{ musicaAtual.musica.titulo }</Typography>
                        <Typography variant="subtitle1" component="h3">{ musicaAtual.musica.artista }</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><SkipPreviousIcon/></IconButton>
                        <IconButton onClick={handleBotaoTocar}>
                            {  musicaAtual.estaTocando ? <PauseCircle style={{fontSize : "40px"}}/> :  <PlayArrowIcon style={{fontSize : "40px"}}/>  }
                        </IconButton>
                        <IconButton><SkipNextIcon/></IconButton>
                        <Typography>00:30:12</Typography>
                        {
                            !telaGrande &&
                            <IconButton onClick={() => handleChange()}><QueueMusicIcon/></IconButton>
                        }
                    </CardActions>
                    <CardMedia image={ musicaAtual.musica.thumbnail } style={{ objectFit: 'cover', width: '120px', height: '120px' }}/>
                </div>
                <Slider type="range" min={0} ma={1} step={0.01} sx={{ width: '90%', m:'auto' }}></Slider>
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