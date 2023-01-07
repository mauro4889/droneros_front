import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../../axios/category'
import { ContainerButton } from '../UpdateProduct/UpdateProductStyle'
import { AddCategoryContainer } from './AddCategoryStyle'

export const AddCategory = () => {
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    const onSubmit = async values =>{
        const {name} = values
        const categoryName = name.toUpperCase()
        try {
            const response = await addCategory(categoryName)
            
            if(response.data.success){
                alert('CATEGORIA CREADA')
            }else{
                alert('ERROR AL CREAR LA CATEGORIA')
            }

            reset()
        } catch (error) {
            console.log(error)
            return error
        }
    }

    return (
        <AddCategoryContainer>
            <h3>AGREGAR CATEGORIA NUEVA</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>NOMBRE</label>
                <input type="text" {...register('name', { required: true })} />

                <ContainerButton>
                    <button className='accept' >CREAR</button>
                    <button className='cancel' onClick={()=> navigate('/admin/panel/category')} >CANCELAR</button>
                </ContainerButton>
            </form>
        </AddCategoryContainer>
    )
}
