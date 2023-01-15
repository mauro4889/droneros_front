import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../axios/users'
import { CreateAcountContainer, FormStyle } from './CreateAcountStyle'

export const CreateAcount = () => {
    const { reset, register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [isPassword,setIsPassword] = useState('')

    const onSubmit = async (values) => {
        const {password} = values
        
        if(password !== isPassword){
            return alert('No coincide la contraseña')
        }

        try {
            const newUser = await createUser(values)
            
            if(newUser.data.existEmail){
                return alert('Ya existe un usuario con ese email')
            }
            
            if(newUser.data.success){
                alert('Su cuenta se creo exitosamente. Se envio un correo para validar la cuenta')
                navigate('/login')
            }
            
            return newUser
        } catch (error) {
            console.log(error)
            return error
        }
        
        reset()
    }

    

    return (
        <CreateAcountContainer>
            <h3>Registrarse</h3>
            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input type="text" {...register('firstname', { required: true })} />
                {errors.firstname && errors.firstname.type === "required" && <span>El nombre es requerido</span>}

                <label>Apellido</label>
                <input type="text" {...register('lastname', { required: true })} />
                {errors.lastname && errors.lastname.type === "required" && <span>El apellido es requerido</span>}

                <label>Email</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email && errors.email.type === "required" && <span>El email es requerido</span>}

                <label>Ciudad</label>
                <input type="text" {...register('city', { required: true })} />
                {errors.city && errors.city.type === "required" && <span>La ciudad es requerida</span>}

                <label>Codigo Postal</label>
                <input type="number" {...register('cp', { required: true, valueAsNumber: true })} />
                {errors.cp && errors.cp.type === "required" && <span>El código postal es requerido</span>}

                <label>Calle</label>
                <input type="text" {...register('street', { required: true })} />
                {errors.street && errors.street.type === "required" && <span>La calle es requerida</span>}

                <label>Contraseña</label>
                <input type="password" {...register('password', { required: true, minLength: 4 })} />
                {errors.password && errors.password.type === "required" && <span>Debe ingresar la contraseña</span>}

                <label>Repetir contraseña</label>
                <input type="password" {...register('cpassword', { required: true, minLength: 4 })} onChange={(e)=> setIsPassword(e.target.value)} />
                {errors.cpassword && errors.cpassword.type === "required" && <span>Debe ingresar la contraseña</span>}

                <button type='submit'>Enviar</button>
            </FormStyle>
        </CreateAcountContainer>
    )
}
