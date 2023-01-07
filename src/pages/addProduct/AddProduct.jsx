import { AdvancedImage } from '@cloudinary/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAllCategory } from '../../axios/category'
import { addProduct } from '../../axios/products'
import { AddProductContainer, AddProductForm, ContainerButton } from './AddProductStyle'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

const myImage = new CloudinaryImage('sample', {cloudName: 'dxgkdm6jw'}).resize(fill().width(100).height(150));

export const AddProduct = () => {
  const { reset, register, handleSubmit } = useForm()
  const [isCategory, setIsCatgory] = useState()
  const navigate = useNavigate()

  const getCategoty = async () => {
    try {
      const { data } = await getAllCategory()
      setIsCatgory(data.data)
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const onSubmit = async (values) => {
    const {name, description, price, stock, category, image} = values
    
    if(!category){
      throw alert('Error en la categoria')
    }

    try {
      const created = await addProduct(name, description, price, stock, image, category)

      if(created.code === 'ERR_BAD_REQUEST'){
        throw alert('Error al crear producto')
      }

      reset()
      return alert('Producto creado satisfactoriamente')
    } catch (error) {
      console.log(error)
      return error
    }

  }

  useEffect(() => {
    getCategoty()
  }, [])

  return (
    <AddProductContainer>
      <h2>AGREGA UN PRODUCTO NUEVO</h2>
      <AddProductForm onSubmit={handleSubmit(onSubmit)} >
        <label>Nombre</label>
        <input type="text" {...register('name', { required: true })} />

        <label>Descripcon</label>
        <input type="text" {...register('description', { required: true })} />

        <label>Precio</label>
        <input type="number" {...register('price', { required: true, valueAsNumber: true })} />

        <label>Stock</label>
        <input type="stock" {...register('stock', { required: true, valueAsNumber: true })} />

        <label>Categoria</label>
        <select  {...register('category', { required: true, valueAsNumber: true })} {...isCategory} >
          <option value="" selected>---</option>
        {isCategory?.map(e => (
            <option key={e.id} value={e.id}>
              {e.categoryName}
            </option>
          ))}
        </select>

        <label>Imagen</label>
        <input type="text" placeholder='URL' {...register('image', { required: true })} />
        <AdvancedImage cldImg={myImage} />

        <ContainerButton>
          <button className='accept'>ACEPTAR</button>
          <NavLink to='/admin/panel' ><button className='cancel'>CANCELAR</button></NavLink>
        </ContainerButton>
      </AddProductForm>
    </AddProductContainer>
  )
}
