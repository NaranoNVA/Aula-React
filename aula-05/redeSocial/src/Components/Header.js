import React from 'react';
import { UserContext } from '../App';

function Header() {
    const[user, setUser] = React.useState("");
    const [username, setUsername] = React.useContext(UserContext)

    function handleClickLogar() {
        setUsername(user);
        setUser("");
    }

    function handleClickDeslogar() {
        setUsername("");
    }

    function handleChangeUser(event){
        setUser(event.target.value);
    }

    return (
      <div>
      {!username &&
        <>
            <input type="text" onChange={handleChangeUser}></input>
            <button onClick={handleClickLogar}>Logar</button> 
        </>
      }
      {username &&
        <>
            <h1>Bem-vindo, {username}</h1>
            <button onClick={handleClickDeslogar}>Deslogar</button> 
        </>
      }
      </div>
    );
  }
  
  export default Header;