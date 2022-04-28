import React, { useContext } from 'react';
import Layout from '../components/shared/Layouts';

import { useLazyQuery } from '@apollo/client';

import { GET_LOGIN } from '../graphql/login/query';
import { UserContext } from '../auth';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = React.useState("sarinha");
    const [password, setPassword] = React.useState("sarinha");
    const [loadLogin] = useLazyQuery(GET_LOGIN);
    const { setCurrentUser } = useContext(UserContext);

    const navigate = useNavigate();

    function handleLogin() {
        loadLogin({ variables: { username } })
            .then((lazy) => {

                const user = lazy.data.user[0]

                if (user.password === btoa(password)) {
                    const { username, name, id } = user
                    setCurrentUser({ id, name, username })
                    navigate('/')

                }

            })
    }

    return (
        <Layout title="Login">
            <div className="row">
                <div className='col-6 d-none d-lg-block text-end'>
                    <img src="/img/iphone.png" alt='iPhone' />
                </div>
                <div className='col-lg-4 col-10 mx-auto mx-lg-0'>
                    <div className='border rounded-1 p-5 my-2 mx-auto mx-lg-0' style={{ maxWidth: '430px', minWidth: '430px' }} >
                        <h2 className='mb-5 fw-bold' style={{ 'fontSize': '50px', 'fontFamily': "'Cookie', cursive" }}>Senacgram</h2>
                        <input type="text" className='form-control my-2' placeholder='Usuário' value={username} onChange={(event) => setUsername(event.target.value)} />
                        <input type="password" className='form-control my-2' placeholder='Senha' value={password} onChange={(event) => setPassword(event.target.value)} />
                        <button className='btn btn-primary w-100 mt-3' onClick={handleLogin}>Logar</button>
                        <hr className='my-5' />
                        <div className='text-center'>
                            <p>
                                Não tem uma conta?
                                <Link to="/register" className='mx-2'>
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>
                        <div className='mt-2'>
                            Obtenha o aplicativo
                            <div className='row justify-content-center'>
                                <img alt="img" src='img/apple.png' style={{ height: '40px', width: '160px' }} />
                                <img alt="img" src='img/google.png' style={{ height: '40px', width: '160px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>);
}