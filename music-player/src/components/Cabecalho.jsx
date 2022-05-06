import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HeadphonesIcon from '@mui/icons-material/Headphones';

export default function Cabecalho(){
    return (
        <AppBar>
            <Toolbar position="fixed" color="primary">
                <HeadphonesIcon></HeadphonesIcon>
                <Typography variant="h6" component="h1" sx={{ mx:2 }}>Cabeçalho</Typography>
            </Toolbar>
        </AppBar>
    )
}