import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContainer } from './ProfileStyle'

export const Profile = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

    const {role} = JSON.parse(localStorage.getItem('user'))

    if(role === 'ADMIN'){
        setIsAdmin(true)
    }

    const logOut = () => {
        localStorage.setItem('user', JSON.stringify(''))
        navigate('/')
    }

    return (
        <ProfileContainer>
            <h3>Panel de usuario</h3>
            <form action="">
                <button onClick={()=> navigate('update')} >Modificar datos</button> 
                <button>Ver resumen de compras</button>
                {
                    isAdmin ?
                    <button onClick={()=> navigate('/admin/panel')} >Panel administrador</button>
                    :
                    <button onClick={logOut} >Cerrar Sesión</button>
                }
            </form>
        </ProfileContainer>
    )
}
