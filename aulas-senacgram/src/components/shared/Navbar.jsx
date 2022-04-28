import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth';
import NewPost from '../modal/NewPost';

const Navbar = () => {

    const { currentUser } = useContext(UserContext);
    const [isNewPost, setIsNewPost] = useState(false)

    return (
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
                            <div>

                                <button className='btn' onClick={() => setIsNewPost(old => !old)}>
                                    New post
                                    <NewPost isNewPost={isNewPost} />
                                </button>
                            </div>
                        </li>
                    }
                    <li className='nav-item'>
                        {currentUser.name}
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar