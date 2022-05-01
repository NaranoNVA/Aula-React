import React, { useState, useRef, useContext } from 'react'
import { UserContext } from '../../auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../graphql/login/mutation';

const ChangeUser = ({ isChangeUser }) => {
    if (isChangeUser) {
        const element = document.getElementById('alterarDados')
        if (!element.classList.contains('show')){
            console.log(element);
            new window.bootstrap.Modal(element).show();
        }
    }
    const [setUser] = useMutation(UPDATE_USER);
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [name, setName] = useState(currentUser.name);
    const imageRef = useRef();

    const uploadImage = async () => {
        const mockData = new FormData();

        mockData.append('file', imageRef.current.files[0])
        mockData.append('upload_preset', 'senacgram')
        mockData.append('cloud_name', 'dpereira')

        const response = await fetch('http://api.cloudinary.com/v1_1/dpereira/image/upload', {
            method: 'POST',
            accept: 'applicaton/json',
            body: mockData
        })

        const respJson = await response.json();

        return respJson.url
    }

    const changeUser = async () => {
        console.log(imageRef);
        console.log(currentUser);

        const imageURl = imageRef.current.files.length > 0 ? await uploadImage() : currentUser.image;

        const objetoUser = {
            name: name,
            image: imageURl,
            id: currentUser.id
        }

        setUser({
            variables: {
                name: objetoUser.name,
                image: objetoUser.image,
                id: objetoUser.id
            }
        }).then((retorno) => {
            const { id, name, username, image} = retorno.data.update_user.returning[0]
            setCurrentUser({ id, name, username, image })
            imageRef.current.value = '';
            const modal = document.getElementById("alterarDadosFechar")
            modal.click();
        })
    }

    return (
        <div className="modal fade" id="alterarDados" tabIndex="-1" aria-labelledby="alterarDadosLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="alterarDadosLabel">Alterar Dados</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className='form-control my-2' placeholder='Nome' value={name} onChange={(event) => setName(event.target.value)}/>
                        <input type="file" className='form-control my-2' ref={imageRef} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="alterarDadosFechar" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-primary" onClick={changeUser}>Gravar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeUser;