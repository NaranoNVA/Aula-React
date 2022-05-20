import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from "react";
import { useSubscription } from "@apollo/client";
import { PEGAR_MUSICAS } from "../gralphql/subscriptions";
import { MusicaContext } from "../App";
import { PauseCircle } from "@mui/icons-material";

export default function ListaMusicas({fila}){
    const { data, loading, error } = useSubscription(PEGAR_MUSICAS);
    const { musicaAtual, musicaDispatch } = React.useContext(MusicaContext);


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
        const [ isMusicaAtual, setIsMusicaAtual ] = React.useState(false);

        React.useEffect(() => {
            setIsMusicaAtual(musicaAtual.musica.id == musica.id && musicaAtual.estaTocando)
        },[musicaAtual.musica.id, musicaAtual.estaTocando]);

        function handleMudarMusica() {
            musicaDispatch({ type: "MUDAR_MUSICA", payload: { musica } });
            musicaDispatch({ type: isMusicaAtual ? "PAUSAR_MUSICA" : "TOCAR_MUSICA"});
        }

        function handleAdicionarFila(){
            fila.filaAtualDispatch({ type: "ADICIONAR_FILA", payload: { musica } });
        }

        return (
            <Card style={{ display: 'flex', alignItems : 'center' }} sx={{ my:1 }}>
                <CardMedia image={thumbnail} style={{ objectFit: 'cover', width: '120px', height: '120px' }}/>
                <div style={{ display: 'flex', width : '100%', justifyContent : 'space-between' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">{titulo}</Typography>
                        <Typography variant="subtitle1" component="h3">{artista}</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={handleMudarMusica}>
                            {  isMusicaAtual ? <PauseCircle color="primary"/> :<PlayCircleIcon color="primary"/> }
                        </IconButton>
                        <IconButton onClick={handleAdicionarFila}>
                            <QueueMusicIcon color="primary"/>
                        </IconButton>
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