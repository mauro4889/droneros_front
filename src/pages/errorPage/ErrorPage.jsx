import React from 'react'
import { ErrorContainerStyle } from './ErrorPageStyle'
import error from '../../assets/img/error.png'
import { NavLink } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ErrorPage = () => {
    return (
        <ErrorContainerStyle>
            <NavLink to='/' className='link'><FontAwesomeIcon icon={faArrowLeft} /><h3>Volver al inicio</h3></NavLink>
            <img src={error} alt="404" />
        </ErrorContainerStyle>
    )
}
