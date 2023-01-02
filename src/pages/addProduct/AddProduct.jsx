import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AddProductContainer, AddProductForm, ContainerButton } from './AddProductStyle'

export const AddProduct = () => {
  const navigate = useNavigate()
  return (
    <AddProductContainer>
        <h2>AGREGA UN PRODUCTO NUEVO</h2>
        <AddProductForm>
            <label>Nombre</label>
            <input type="text" />

            <label>Descripcon</label>
            <input type="text" />

            <label>Precio</label>
            <input type="text" />

            <label>Imagen</label>
            <input type="text" placeholder='URL' />

            <ContainerButton>
            <button className='accept'>ACEPTAR</button>
            <NavLink to='/admin/panel' ><button className='cancel'>CANCELAR</button></NavLink>
            </ContainerButton>
        </AddProductForm>
    </AddProductContainer>
  )
}
