import { Card, CardActions, CardContent, CardMedia, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import React from "react";
import FilaMusicas from "./FilaMusicas";

export default function TocadorMusica(){
    return (
        <div>
            <Card style={{ display: 'flex', flexDirection : 'column' }} >
                <div style={{ display: 'flex', justifyContent : 'space-between'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">Titulo da Música</Typography>
                        <Typography variant="subtitle1" component="h3">Nome do Artista</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><SkipPreviousIcon/></IconButton>
                        <IconButton><PlayArrowIcon/></IconButton>
                        <IconButton><SkipNextIcon/></IconButton>
                        <Typography>00:30:12</Typography>
                    </CardActions>
                    <CardMedia image="https://www.jame-world.com/media/image/2021-03/11185.jpg" style={{ objectFit: 'cover', width: '120px', height: '120px' }}/>
                </div>
                <Slider type="range" min={0} ma={1} step={0.01} sx={{ width: '90%', m:'auto' }}></Slider>
            </Card>
            <FilaMusicas />
        </div>
    )
}