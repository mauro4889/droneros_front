import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { updateProduct } from '../../axios/products'
import { ContainerButton, UpdateProductContainer, UpdateProductForm } from './UpdateProductStyle'

export const UpdateProduct = () => {
  const { reset, register, handleSubmit } = useForm()
  const [isEmpty, setIsEmpty] = useState('')

  const onSubmit = async(values) => {

    if(!isEmpty){
      return alert('Debe completar minimo un campo')
    }

    try {
      const updated = await updateProduct(...values)

      return updated
    } catch (error) {
      console.log(error)
            return error
    }
    reset()
  }

  return (
    <UpdateProductContainer>
      <h2>AGREGA UN PRODUCTO NUEVO</h2>
      <UpdateProductForm onSubmit={handleSubmit(onSubmit)} >
        <label>Nombre</label>
        <input type="text" {...register('productName')} onChange={(e) => setIsEmpty(e.target)} />

        <label>Descripcon</label>
        <input type="text" {...register('description')} onChange={(e) => setIsEmpty(e.target)} />

        <label>Precio</label>
        <input type="text" {...register('price')} onChange={(e) => setIsEmpty(e.target)} />

        <label>Imagen</label>
        <input type="text" placeholder='URL' {...register('url')} onChange={(e) => setIsEmpty(e.target)} />

        <ContainerButton>
          <button className='accept'>ACEPTAR</button>
          <NavLink to='/admin/panel/listproducts' ><button className='cancel'>CANCELAR</button></NavLink>
        </ContainerButton>
      </UpdateProductForm>
    </UpdateProductContainer>
  )
}
