import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MenuContainer, UserContainer } from './UserStyle'


const variants = {
    open: {
        opacity: 1,
        height: "10em"
    },
    close: {
        top: "-100px",
        height: 0,
        paddingTop: 0
    }
}

export const User = () => {
    const [isOpen, setOpen] = useState(false)
    const { firstname } = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem('user', JSON.stringify(''))
        window.location.reload()
    }



    return (
        <UserContainer>
            <ul>
                <NavLink to='profile' > <li>Perfil</li> </NavLink>
                <li onClick={logOut}>Cerrar Sesión</li>
            </ul>
        </UserContainer>
    )
}
