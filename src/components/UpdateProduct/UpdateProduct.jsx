import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useLocation } from 'react-router-dom'
import { updateProduct } from '../../axios/products'
import { ContainerButton, UpdateProductContainer, UpdateProductForm } from './UpdateProductStyle'

export const UpdateProduct = () => {
  const { reset, register, handleSubmit } = useForm()
  const [isEmpty, setIsEmpty] = useState('')
  let location = useLocation()

  console.log(location.state?.productId)

  const onSubmit = async(_values) => {
    const data = {}
    
    for(const [key, value] of Object.entries(_values)){
      if(value){
        data[`${key}`] = value
      }      
    }
    

    if(!isEmpty){
      return alert('Debe completar minimo un campo')
    }

    try {
      const updated = await updateProduct(location.state?.productId, data)

      return updated
    } catch (error) {
      console.log(error)
            return error
    }
    reset()
  }

  return (
    <UpdateProductContainer>
      <h2>MODIFICAR PRODUCTO</h2>
      <UpdateProductForm onSubmit={handleSubmit(onSubmit)} >
        <label>Nombre</label>
        <input type="text" {...register('name')} onChange={(e) => setIsEmpty(e.target)} />

        <label>Descripcon</label>
        <input type="text" {...register('description')} onChange={(e) => setIsEmpty(e.target)} />

        <label>Precio</label>
        <input type="number" {...register('price', {valueAsNumber: true})} onChange={(e) => setIsEmpty(e.target)} />

        <label>Stock</label>
        <input type="number" {...register('stock', {valueAsNumber: true})} onChange={(e) => setIsEmpty(e.target)} />

        <label>Imagen</label>
        <input type="text" placeholder='URL' {...register('img')} onChange={(e) => setIsEmpty(e.target)} />

        <ContainerButton>
          <button className='accept'>ACEPTAR</button>
          <NavLink to='/admin/panel' ><button className='cancel'>CANCELAR</button></NavLink>
        </ContainerButton>
      </UpdateProductForm>
    </UpdateProductContainer>
  )
}
