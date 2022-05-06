import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import React from "react";

export default function AdicionarMusica(){
    const [dialog, setDialog] = React.useState(false);

    return (
        <>
            <Dialog open={dialog}>
                <DialogTitle>Editar Música</DialogTitle>
                <DialogContent style={{ textAlign: "center" }}>
                    <img src="https://www.jame-world.com/media/image/2021-03/11185.jpg" style={{ width: '90%' }}/>
                    <TextField sx={{ mt: 1 }} variant="outlined" label="Nome da Música" fullWidth></TextField>
                    <TextField sx={{ mt: 1 }} variant="outlined" label="Nome do Artista" fullWidth></TextField>
                    <TextField sx={{ mt: 1 }} variant="outlined" label="Imagem" fullWidth></TextField>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => setDialog(false)}>Cancelar</Button>
                    <Button variant="contained">Salvar</Button>
                </DialogActions>
            </Dialog>
            <div style={{ display: "flex", alinItens: "center" }}>
                <TextField variant="outlined" label="Adicione a URL" type="url" fullWidth sx={{ mr:1 }}/>
                <Button startIcon={<SubscriptionsIcon />} variant="contained" onClick={() => setDialog(true)}>Adicionar</Button>
            </div>
        </>
    )
}