import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Descricao(){
  const [crypts, setCrypts] = React.useState(null);

  useEffect(() => {
    fetch("https://api.wazirx.com/sapi/v1/tickers/24hr")
      .then(res => {
        res.json();
      })
      .then(data => setCrypts(data));
  }, []); //com [] (False) ele so roda uma vez

  /*function handleClickLinguagem(){
    setDeveloper({
      ...developer,
      lang : "C#", 
      anos: 1
    });
  }*/

  return( 
    !crypts ?
    <h1>Carregando...</h1>
    :
    <>
      <p>{crypts[0].baseAsset}</p>
      <p>{crypts[0].lastPrice}</p>    
    </>           
  )
}


ReactDOM.render(
  <Descricao>

  </Descricao>
  ,document.getElementById('root')
);