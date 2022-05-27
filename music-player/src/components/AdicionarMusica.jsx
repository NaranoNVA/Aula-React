import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import React from "react";
import YouTubePlayer from "react-player/youtube";
import ReactPlayer from "react-player";
import { ADICIONAR_MUSICA } from "../gralphql/mutation";
import { useMutation } from "@apollo/client";

const MUSICA_PADRAO = {
    id : '',
    duracao: 0,
    titulo: '',
    artista: '',
    thumbnail: '',
    url: ''
}

export default function AdicionarMusica(){
    const [dialog, setDialog] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [tocavel, setTocavel] = React.useState(false);
    const [musica, setMusica] = React.useState(MUSICA_PADRAO);
    const [adicionarMusica] =  useMutation(ADICIONAR_MUSICA);

    React.useEffect( () => {
        setTocavel(YouTubePlayer.canPlay(url));
    }, [url])

    function handleEditMusica({player}) {
        if(tocavel){
            const realPlayer = player.player.player;
            const { author, video_id, title } = realPlayer.getVideoData();
            const novaMusica = {
                artista: author,
                id: video_id,
                titulo: title,
                duracao: realPlayer.getDuration(),
                thumbnail: `http://img.youtube.com/vi/${video_id}/maxresdefault.jpg`,
                url: url
            }
            setMusica(novaMusica);
        }
    }

    function handleEditDataMusica (event) {
        const { name, value } = event.target;
        setMusica(prevMusica => ({
            ...prevMusica,
            [name] : value
        }));
    }

    async function handleAdicionarMusica () {
        const { artista, duracao, thumbnail, titulo, url } = musica
        try{
            await adicionarMusica({
                variables: {
                    artista: artista.length > 0 ? artista : null, 
                    duracao: duracao > 0 ? duracao : null,
                    thumbnail: thumbnail.length > 0 ? thumbnail : null,
                    titulo: titulo.length > 0 ? titulo : null,
                    url:  url.length > 0 ?  url : null
                }
            });

            setDialog(false);
            setMusica(MUSICA_PADRAO);
            setUrl('');
        }
        catch(e){
            alert("Não foi possivél adicionar a música.");
        }
    }

    return (
        <>
            <Dialog open={dialog}>
                <DialogTitle>Editar Música</DialogTitle>
                <DialogContent style={{ textAlign: "center" }}>
                    <img src={musica.thumbnail} style={{ width: '90%' }} alt="Imagem da música"/>
                    <TextField name="titulo" onChange={handleEditDataMusica} sx={{ mt: 1 }} variant="outlined" label="Nome da Música" value={musica.titulo} fullWidth></TextField>
                    <TextField name="artista" onChange={handleEditDataMusica} sx={{ mt: 1 }} variant="outlined" label="Nome do Artista" value={musica.artista} fullWidth></TextField>
                    <TextField name="thumbnail" onChange={handleEditDataMusica} sx={{ mt: 1 }} variant="outlined" label="Imagem" value={musica.thumbnail} fullWidth></TextField>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => setDialog(false)} color="secondary">Cancelar</Button>
                    <Button variant="contained" onClick={handleAdicionarMusica}>Salvar</Button>
                </DialogActions>
            </Dialog>
            <div style={{ display: "flex", alinItens: "center" }}>
                <TextField variant="outlined" label="Adicione a URL" type="url" fullWidth sx={{ mr:1 }} value={url} onChange={(e)=> setUrl(e.target.value)}/>
                <Button disabled={!tocavel} startIcon={<SubscriptionsIcon />} variant="contained" onClick={() => setDialog(true)} sx={{ p: 2}}>Adicionar</Button>
            </div>

            <ReactPlayer url={url} hidden onReady={handleEditMusica}/>
        </>
    )
}