import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from "react";
import { useQuery } from "@apollo/client";
import { PEGAR_MUSICAS } from "../gralphql/query";

export default function ListaMusicas(){
    const { data, loading, error, refetch } = useQuery(PEGAR_MUSICAS);


    if(loading){
        return (
            <div>
                Carregando...
            </div>
        )
    }

    if(error){
        console.log(error);
        return (
            <div>Erro...</div>
        )
    }

    function Musica( {musica} ){
        const { titulo, thumbnail, artista } = musica;
        return (
            <Card style={{ display: 'flex', alignItems : 'center' }} sx={{ my:1 }}>
                <CardMedia image={thumbnail} style={{ objectFit: 'cover', width: '120px', height: '120px' }}/>
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
                data.musicas.map((musica, index) => {
                    return (<Musica key={musica.id} musica={musica}/>)
                })
            }
        </div>
    )
}