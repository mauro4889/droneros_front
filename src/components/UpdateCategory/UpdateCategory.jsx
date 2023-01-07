import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useLocation } from 'react-router-dom'
import { updateCategory } from '../../axios/category'
import { ContainerButton, UpdateCategoryContainer } from './UpdateCategoryStyle'

export const UpdateCategory = () => {
    const { reset, register, handleSubmit } = useForm()
    const [isEmpty, setIsEmpty] = useState('')
    let location = useLocation()
    

    const onSubmit = async (values) => {

        if (!isEmpty) {
            alert('Por favor completa el campo')
        }

        try {
            const response = await updateCategory(location.state?.categoryId, values)

            if(response.data.success){
                alert('CATEGORIA ACTUALIZADA')
            }else{
                alert('ERROR AL ACTUALIZAR LA CATEGORIA')
            }
            
            reset()
        } catch (error) {
            return error
        }
    }

    return (
        <UpdateCategoryContainer>
            <h3>ACTUALIZA LA CATEGORIA</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>NOMBRE</label>
                <input type="text" {...register('categoryName')} onChange={(e) => setIsEmpty(e.target)} />

                <ContainerButton>
                    <button className='accept'>ACEPTAR</button>
                    <NavLink to='/admin/panel/category/list' ><button className='cancel'>CANCELAR</button></NavLink>
                </ContainerButton>
            </form>
        </UpdateCategoryContainer>
    )
}
