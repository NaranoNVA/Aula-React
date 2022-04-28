import React, { useState, useContext } from 'react';
import Layout from '../components/shared/Layouts';

import { useMutation } from '@apollo/client';

import { REGISTER_USER } from '../graphql/login/mutation';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../auth';

const RegisterPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const { setCurrentUser } = useContext(UserContext);

    const [addLogin] = useMutation(REGISTER_USER);

    function handleRegister() {

        addLogin({ variables: { username, password: btoa(password), name } })
            .then(retorno => {

                const { id, name, username } = retorno.data.insert_user.returning[0]

                setCurrentUser({ id, name, username })

                navigate('/')

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
                        <input
                            type="text"
                            className='form-control my-2'
                            placeholder='Nome'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            type="text"
                            className='form-control my-2'
                            placeholder='Login'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <input
                            type="password"
                            className='form-control my-2'
                            placeholder='Senha'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <button
                            className='btn btn-primary mt-3 w-100'
                            onClick={handleRegister}>
                            Registrar
                        </button>

                        <hr className='my-5' />
                        <div className='text-center'>
                            <p>
                                Já possui registro?
                                <Link to="/login" className="px-2">
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default RegisterPage