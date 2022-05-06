import { Avatar, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export default function FilaMusicas(){
    const musicaFake = {
        titulo: "Guh!",
        artista: "Calliope Mori",
        imagem: "https://www.jame-world.com/media/image/2021-03/11185.jpg"
    }

    function MusicaFila( {musica} ){
        const { titulo, imagem, artista } = musica;
        return (
            <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', margin: '10px' }}>
                <Avatar src={imagem} alt="Capa do CD" style={{ width: '40px', height: '40px' }}></Avatar>
                <div>
                    <Typography variant="subtitle2">{titulo}</Typography>
                    <Typography variant="body2">{artista}</Typography>
                </div>
                <IconButton><DeleteIcon color="error"/></IconButton>
            </div>
        )
    }

    return (
        <div>
            <Typography >Proximos da Fila {5}</Typography>
            {
            Array.from({length: 5}, () => musicaFake).map((musica, index) => {
                return (<MusicaFila key={index} musica={musica}/>)
            })
            }
        </div>
    )
}