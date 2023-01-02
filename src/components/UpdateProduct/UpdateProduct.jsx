import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerButton, UpdateProductContainer, UpdateProductForm } from './UpdateProductStyle'

export const UpdateProduct = () => {
  return (
    <UpdateProductContainer>
        <h2>AGREGA UN PRODUCTO NUEVO</h2>
        <UpdateProductForm>
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
            <NavLink to='/admin/panel/listproducts' ><button className='cancel'>CANCELAR</button></NavLink>
            </ContainerButton>
        </UpdateProductForm>
    </UpdateProductContainer>
  )
}
