import React from 'react';
import { PostContext } from '../App';
import { UserContext } from '../App';

function Form() {
    const dispatch  = React.useContext(PostContext);
    const username  = React.useContext(UserContext);

    const[conteudo, setConteudo] = React.useState("");
    const imagem = React.useRef();

    function handleChangeConteudo(event) {
        setConteudo(event.target.value);
    }

    function handleClickEnviar() {
        console.log(imagem);
        const newPost = {
            text: conteudo,
            image: imagem.current.files[0],
            username: username[0],
            like: 0,
            date: new Date()
        };

        dispatch({ type: "CRIAR_POST", payload: newPost })
        //setPosts([newPost, ...posts]);
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