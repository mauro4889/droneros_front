import { LogoStyle, NavButtonStyle, NavMenuStyle, NavStyle } from './NavBarStyle'
import logo2 from '../../assets/img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const variants = {
    open: { opacity: 1, top: "4em", },
    close: { top: 0, height: 0 }
}



export const NavBar = () => {
    const [isOpen, setOpen] = useState(false)

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
            >
                <ul>
                    <NavLink to='/' className='links'><li>Inicio</li></NavLink>
                    <NavLink to='products' className='links'><li>Productos</li></NavLink>
                    <li>Nosotros</li>
                    <li>Ingresar</li>
                </ul>
            </NavMenuStyle>
        </NavStyle>
    )
}
