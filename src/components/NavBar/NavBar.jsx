import { LogoStyle, NavButtonStyle, NavMenuStyle, NavStyle } from './NavBarStyle'
import logo2 from '../../assets/img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { User } from '../User/User'
import { Cart } from '../Cart/Cart'
import { useDispatch } from 'react-redux'
import { cleanCart } from '../../redux/cart/cartReducer'



const variants = {
    open: {
        opacity: 1,
        top: "4em",
        height: "20em",
        visibility: "visible"
    },
    close: {
        top: "-100px",
        height: 0,
    }
}



export const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const [isUser, setIsUser] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'))
        setIsUser(data)
    }, [localStorage])

    const logOut = () => {
        localStorage.setItem('user', JSON.stringify(''))
        dispatch(cleanCart())
        window.location.reload()
    }

    return (
        <NavStyle>
            <LogoStyle>
                <img src={logo2} alt="Logo" />
            </LogoStyle>
            <NavButtonStyle onClick={() => {
                setOpen(!isOpen)
            }}>
                <FontAwesomeIcon icon={faBars} className='btnMenu' />
            </NavButtonStyle>
            <NavMenuStyle
                animate={isOpen ? "open" : "close"}
                variants={variants}
                transition={{ duration: .3 }}
            >
                <ul onClick={() => setOpen(false)}>
                    <NavLink to='/' className='links'><li>Inicio</li></NavLink>
                    <NavLink to='products' className='links'><li>Productos</li></NavLink>
                    <li>
                        {
                            isUser ?
                                <li onClick={logOut}>Cerrar Sesión</li>
                                :
                                <NavLink to='login' className='links'>Iniciar Sesión</NavLink>
                        }
                    </li>
                </ul>
            </NavMenuStyle>
            <button className='userButton' onClick={()=> navigate('/profile')} ><FontAwesomeIcon icon={faUser} /></button>
            <Cart />
        </NavStyle>
    )
}
