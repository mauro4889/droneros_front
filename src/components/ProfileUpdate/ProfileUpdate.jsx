import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../axios/users'
import { ProfileUpdateContainer } from './ProfileUpdateStyle'

export const ProfileUpdate = () => {
    const { reset, register, handleSubmit } = useForm()
    const [isEmpty, setIsEmpty] = useState('')
    const navigate = useNavigate()


    const updateLocalStorage = async (data) =>{
        localStorage.setItem('user', JSON.stringify(data))
    }

    const onSubmit = async (_values) => {
        const data = {}

        for (const [key, value] of Object.entries(_values)) {
            if (value) {
                data[`${key}`] = value
            }
        }

        if (!isEmpty) {
            return alert('Debe completar un campo')
        }

        try {
            const update = await updateUser(data)

            const {email, firstname, role, validated, city, street, cp} = update.data.updated

            updateLocalStorage({email: email, firstname: firstname, role: role, validated: validated, city: city, street: street, cp: cp})

            if(update){
                alert('Datos actualizados')
            }

            navigate('/profile')
        } catch (error) {
            console.log(error)
            return error
        }

    }

    return (
        <ProfileUpdateContainer>
            <h3>En esta sección podras modificar datos personales</h3>
            <p>Modifique aquel dato que le interesa cambiar</p>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>Nombre</label>
                <input type="text" {...register('firstname')}
                    onChange={e => setIsEmpty(e.target.value)} />

                <label>Apellido</label>
                <input type="text" {...register('lastname')}
                    onChange={e => setIsEmpty(e.target.value)} />

                <label>Email</label>
                <input type="text" {...register('email')}
                    onChange={e => setIsEmpty(e.target.value)} />

                <label>Ciudad</label>
                <input type="text" {...register('city')}
                    onChange={e => setIsEmpty(e.target.value)} />

                <label>Calle</label>
                <input type="text" {...register('street')}
                    onChange={e => setIsEmpty(e.target.value)} />

                <label>Código Postal</label>
                <input type="text" {...register('cp')}
                    onChange={e => setIsEmpty(e.target.value)} />

                <div className="containerButton">
                    <button className='accept' >ENVIAR</button>
                    <button className='cancel' onClick={() => navigate('/profile')} >CANCELAR</button>
                </div>
            </form>
        </ProfileUpdateContainer>
    )
}
