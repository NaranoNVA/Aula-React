import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from "react";

export default function ListaMusicas(){
    const musicaFake = {
        titulo: "Guh!",
        artista: "Calliope Mori",
        imagem: "https://www.jame-world.com/media/image/2021-03/11185.jpg"
    }

    function Musica( {musica} ){
        const { titulo, imagem, artista } = musica;
        return (
            <Card style={{ display: 'flex', alignItems : 'center' }} sx={{ my:1 }}>
                <CardMedia image={imagem} style={{ objectFit: 'cover', width: '120px', height: '120px' }}/>
                <div style={{ display: 'flex', width : '100%', justifyContent : 'space-between' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">{titulo}</Typography>
                        <Typography variant="subtitle1" component="h3">{artista}</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton ><PlayCircleIcon color="primary"/></IconButton>
                        <IconButton ><QueueMusicIcon color="primary"/></IconButton>
                    </CardActions>
                </div>
            </Card>
        )
    }



    return (
        <div>
            {
            Array.from({length: 15}, () => musicaFake).map((musica, index) => {
                return (<Musica key={index} musica={musica}/>)
            })
            }
        </div>
    )
}