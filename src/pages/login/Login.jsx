import React from 'react'
import { FormStyle, LoginContainer } from './LoginStyle'
import google from '../../assets/img/logos/google.png'

export const Login = () => {
    return (
        <LoginContainer>
            <h2>Ingresa a tu cuenta</h2>
            <FormStyle>
                <label>Usuario</label>
                <input type="text" />
                <label>Contraseña</label>
                <input type="password" />
                <button type='submit'>Ingresar</button>
                <p>O puedes ingresar con...</p>
                <div className="alternate_login">
                    <button><img src={google} alt="Google" /></button>
                </div>
            </FormStyle>

        </LoginContainer>
    )
}
