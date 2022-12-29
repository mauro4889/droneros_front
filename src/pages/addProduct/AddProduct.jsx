import React from 'react'
import { AddProductContainer, AddProductForm, ContainerButton } from './AddProductStyle'

export const AddProduct = () => {
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
            <input type="file" name="" id="" />

            <ContainerButton>
            <button className='accept'>ACEPTAR</button>
            <button className='cancel'>CANCELAR</button>
            </ContainerButton>
        </AddProductForm>
    </AddProductContainer>
  )
}
