import React from 'react'
import { CreateAcountContainer, FormStyle } from './CreateAcountStyle'

export const CreateAcount = () => {
    return (
        <CreateAcountContainer>
            <h3>Registrarse</h3>
            <FormStyle>
                <label>Nombre</label>
                <input type="text"/>
                <label>Apellido</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>Contraseña</label>
                <input type="password"/>
                <button type='submit'>Enviar</button>
            </FormStyle>
        </CreateAcountContainer>
    )
}
