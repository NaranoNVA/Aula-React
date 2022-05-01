import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth';
import ChangeUser from '../modal/ChangeUser';
import NewPost from '../modal/NewPost';

const Navbar = () => {

    const { currentUser } = useContext(UserContext);
    const [isNewPost, setIsNewPost] = useState(false)
    const [isChangeUser, setIsChangeUser] = useState(false)

    return (
        <>
            <nav className='navbar fixed-top navbar-light bg-light'>
                <div className="container">

                    <Link to='/' className='navbar-brand'>Senacgram</Link>

                    <ul className='navbar-nav me-auto flex-row space-between'>
                        <li className='nav-item grow-1'>
                            <Link className='nav-link' to="/explorer">Explorar</Link>
                        </li>

                    </ul>

                    <ul className='navbar-nav ms-auto flex-row align-items-center'>
                        {
                            currentUser &&
                            <li className='nav-item mx-2'>
                                {/*<div>
                                    <button className='btn' onClick={() => setIsNewPost(old => !old)}>
                                        New post
                                    </button>
                                </div>*/}
                                <div>
                                    <button className='btn' data-bs-toggle="modal" data-bs-target="#newPost" >
                                        New post
                                    </button>
                                </div>
                            </li>
                        }
                        {/*<li className='nav-item'>
                            <button className='btn' onClick={() => setIsChangeUser(old => !old)}>
                                {currentUser.name}
                            </button>     
                        </li>*/}
                        <li className='nav-item'>
                            <button className='btn' data-bs-toggle="modal" data-bs-target="#alterarDados">
                                {currentUser.name}
                            </button>     
                        </li>
                    </ul>
                </div>
            </nav>
        { currentUser && 
            <>
                <NewPost isNewPost={isNewPost} />
                <ChangeUser isChangeUser={isChangeUser} />
            </>
        }
        </>
    );
}

export default Navbar