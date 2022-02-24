import React from "react";

function Noticias () {

    const noticias = [{
        categoria : "BBB", 
        titulo: "Arthur Aguiar traiu novamente",
        descricao: "Arthur Aguiar traiu o Brasil, ddddddddddddddddddddddddd dsadsadsad fique em casa..."
    },
    {
        categoria : "BBB", 
        titulo: "Monark é demitido da sua propria empresa",
        descricao: "Desculpa eu bebi demais..."
    },
    {
        categoria : "Cultura Geek", 
        titulo: "Olá eu sou Samara",
        descricao: "Samara tenho13 anos, na verdade teria..."
    }];

    const todasNoticiasFormatadas = noticias.map( (noticia) => 
        <div className='col-6 p-2'>
            <div className='row noticia-bloco'> {/* Noticia / Imagem */}
                <div className='col'> {/* Texto */}
                    <a href='#'>{noticia.categoria}</a>
                    <h2>{noticia.titulo}</h2>
                    <p>{noticia.descricao}</p>
                    <a href='#'>Leia mais...</a>
                </div>
                <div className='col-auto'> {/* Imagem */}
                    <img src='https://via.placeholder.com/200x250'></img>
                </div>
            </div>
        </div>
    );

    return (
        <div className='row'>
            {todasNoticiasFormatadas}
        </div>
    );
}

export default Noticias;