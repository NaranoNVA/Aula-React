import React from 'react';


function Form({username, setPosts, posts}) {
    const[conteudo, setConteudo] = React.useState("");
    const imagem = React.useRef();

    function handleChangeConteudo(event) {
        setConteudo(event.target.value);
    }

    function handleClickEnviar() {
        console.log(imagem);
        const post = {
            text: conteudo,
            image: imagem.current.files[0],
            username: username,
            like: 0,
            date: new Date()
        };
        setPosts([post, ...posts]);
    }

    return (
        <div>
            <input type="text" onChange={handleChangeConteudo}/>
            <input type="file" ref={imagem}/>
            <button onClick={handleClickEnviar}>Enviar</button> 
        </div>
    );
  }
  
  export default Form;