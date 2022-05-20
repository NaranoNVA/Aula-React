export function musicaReducer(state, action){
    switch (action.type) { 
        case "TOCAR_MUSICA":
            return { ...state, estaTocando: true } ;//return { ...state, estaTocando: !state.estaTocando } ;
        case "PAUSAR_MUSICA" :
            return { ...state, estaTocando: false };
        case "MUDAR_MUSICA" :
            return { ...state, musica : action.payload.musica };
        default:
            return state;
    }
}

export function filaReducer(state, action){
    switch (action.type) {
        case "ADICIONAR_FILA":
            return state.includes(action.payload.musica) ? state : [ ...state, action.payload.musica ]
        case "REMOVER_FILA":
            return state.filter((musica) => musica.id !== action.payload.musica.id);
        default:
            return state;
    }
}