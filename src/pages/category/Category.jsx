import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CategoryContainer } from './CategoryStyle'

export const Category = () => {
    const navigate = useNavigate()

  return (
    <CategoryContainer>
        <h3>MENU DE CATEGORIA</h3>
        <NavLink to='/admin/panel'><button className='backButton' > <FontAwesomeIcon icon={faArrowLeft} /> Volver </button> </NavLink>
        <div className="containerButtons">
            <button onClick={()=>navigate('add')} >Crear categoria</button>
            <button onClick={()=>navigate('list')}>Ver todas</button>
        </div>        
    </CategoryContainer>
  )
}
