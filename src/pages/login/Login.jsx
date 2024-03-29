import React from 'react'
import { ContainerAnimated, FormStyle, LoginContainer } from './LoginStyle'
import google from '../../assets/img/logos/google.png'
import user from '../../assets/img/login/user.png'
import drone from '../../assets/img/login/drone.png'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../axios/users'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/userReducer'

export const Login = () => {
    const {reset, register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const data = useSelector((state) => state.isLogin)
    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        const {email, password} = values
        
        try {
            const loged = await loginUser(email.toLowerCase(), password)

            if(!loged.data.data.validated){
                return alert ('Email no validado')
            }
    
            localStorage.removeItem('token')            
            localStorage.setItem('token', JSON.stringify(loged.data.token))
            localStorage.setItem('user', JSON.stringify(loged.data.data))
            dispatch(login())
            window.location.reload()
            navigate('/')
            return loged
        } catch (error) {
            console.log(error)
            return error
        }

        reset()
    }


    return (
        <LoginContainer>
            <h2>Ingresa a tu cuenta</h2>
            <FormStyle onSubmit={handleSubmit(onSubmit)} >
                <label>Usuario</label>
                <input type="text" {...register('email', {required: true})} />

                <label>Contraseña</label>
                <input type="password" {...register('password', {required: true})} />

                <button type='submit'>Ingresar</button>
                <div className='register'>
                    <p>¿No tienes usuario? <NavLink className={'link'} to='/createacount'>Registrarse</NavLink></p>
                </div>
            </FormStyle>
            <ContainerAnimated>
                <motion.div className="drone_container"
                animate={{y:[-10,10,-10]}}
                transition={{repeat: Infinity, duration: 2}}>
                    <img src={drone} alt="Drone" />
                </motion.div>
                <div className="user_container">
                    <img src={user} alt="User" />
                </div>
            </ContainerAnimated>
        </LoginContainer>
    )
}
