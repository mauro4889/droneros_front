import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cleanCart } from '../../redux/cart/cartReducer'
import { ProfileContainer } from './ProfileStyle'

export const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {role} = JSON.parse(localStorage.getItem('user'))
    
    const logOut = () => {
        localStorage.setItem('user', JSON.stringify(''))
        dispatch(cleanCart())
        window.location.reload()
        navigate('/')
    }

    return (
        <ProfileContainer>
            <h3>Panel de usuario</h3>
            <form action="">
                <button onClick={()=> navigate('update')} >Modificar datos</button> 
                <button onClick={()=> navigate('resume')} >Ver resumen de compras</button>
                {
                    role == 'ADMIN' ?
                    <button onClick={()=> navigate('/admin/panel')} >Panel administrador</button>
                    :
                    <button onClick={()=>logOut()} >Cerrar Sesión</button>
                }
            </form>
        </ProfileContainer>
    )
}
