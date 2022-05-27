import { Avatar, Card, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export default function FilaMusicas({ fila }){
    function MusicaFila( {musica} ){
        const { titulo, thumbnail, artista } = musica;
        
        function handleRemoveFila(){
            fila.filaAtualDispatch({ type: "REMOVER_FILA", payload: { musica } });
        }

        return (
            <Card sx={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', my: 1, p: 1 }}>
                    <Avatar src={thumbnail} alt="Capa do CD" style={{ width: '40px', height: '40px' }}></Avatar>
                    <div>
                        <Typography variant="subtitle2">{titulo}</Typography>
                        <Typography variant="body2">{artista}</Typography>
                    </div>
                    <IconButton  onClick={handleRemoveFila}>
                        <DeleteIcon color="error"/>
                    </IconButton>
            </Card>
        )
    }

    return (
        <div>
            <Typography>{fila.filaAtual.length > 0 ? `Proximos da Fila (${fila.filaAtual.length})` : "Fila vaiza"}</Typography>
            {
            fila.filaAtual.map((musica, index) => {
                return (<MusicaFila key={index} musica={musica}/>)
            })
            }
        </div>
    )
}