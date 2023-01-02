import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileUpdateContainer } from './ProfileUpdateStyle'

export const ProfileUpdate = () => {
    const navigate = useNavigate()

    return (
        <ProfileUpdateContainer>
            <h3>En esta sección podras modificar datos personales</h3>
            <form action="">
                <label>Nombre</label>
                <input type="text" />

                <label>Apellido</label>
                <input type="text" />

                <label>Email</label>
                <input type="text" />

                <label>Nombre</label>
                <input type="text" />

                <label>Ciudad</label>
                <input type="text" />

                <label>Calle</label>
                <input type="text" />

                <label>Código Postal</label>
                <input type="text" />

                <div className="containerButton">
                    <button className='accept' >ENVIAR</button>
                    <button className='cancel' onClick={()=> navigate('/profile')} >CANCELAR</button>
                </div>
            </form>
        </ProfileUpdateContainer>
    )
}
