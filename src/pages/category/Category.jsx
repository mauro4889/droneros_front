import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryContainer } from './CategoryStyle'

export const Category = () => {
    const navigate = useNavigate()

  return (
    <CategoryContainer>
        <h3>MENU DE CATEGORIA</h3>
        <div className="containerButtons">
            <button onClick={()=>navigate('add')} >Crear categoria</button>
            <button onClick={()=>navigate('list')}>Ver todas</button>
            <button>Eliminar categoria</button>
        </div>        
    </CategoryContainer>
  )
}
