import React from 'react'
import { ContactFormStyle } from './ContactFormStyle'
import { useForm } from "react-hook-form";

export const ContactForm = () => {
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <ContactFormStyle>
            <h2>CONTACTANOS</h2>
            <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                <div className="input_container">
                    <p>Nombre</p>
                    <input type="text" {...register("firstName", {required: true})}/>
                </div>
                <div className="input_container">
                    <p>Email</p>
                    <input type="email" {...register("email", {required: true})}/>
                </div>
                <div className="input_container">
                    <p>Telefono</p>
                    <input type="number" {...register("phone", {required: true})}/>
                </div>
                <div className="input_container">
                    <p>Mensaje</p>
                    <textarea name="" id="" cols="30" rows="10" {...register("message", {required: true})}></textarea>
                </div>
                <button type='submit' >Enviar</button>
            </form>
        </ContactFormStyle>
    )
}
