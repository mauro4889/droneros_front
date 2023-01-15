import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { createResume } from '../../axios/resume'
import { CardProductResume } from '../../components/CardProductResume/CardProductResume'
import { cleanCart } from '../../redux/cart/cartReducer'
import { CartResumeContainer } from './CartResumeStyle'

export const CartResume = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dateTime = new Date()
    const quantity = cart.products.length
    const totalPrice = cart.total
    const data = JSON.parse(localStorage.getItem('user'))
    console.log(data)

    const checkOut = async (quantity, totalPrice, products) => {

        if (cart.products.length == 0) {
            return alert('El carrito esta vacio')
        }

        try {
            const created = await createResume(quantity, totalPrice, products)

            if (created.code == 'ERR_BAD_REQUEST') {
                return alert('Error al realizar la compra')
            }

            alert('Gracias por su compra')
            dispatch(cleanCart())
            navigate('/')
        } catch (error) {
            console.log(error)
            return error
        }
    }

    return (
        <CartResumeContainer>
            <h3>CARRITO DE COMPRA</h3>
            <div className="resumeComponent">
                <div className="resumeInfo">
                    <div className="infoContainer">
                        <label>Fecha:</label> <p>{dateTime.toLocaleDateString()}</p>
                    </div>
                    <div className="infoContainer">
                        <label>Envio: </label>
                        <div className="dataContainer">
                            <p><span> Ciudad: </span> {data.city}</p>
                            <p><span> Codigo Postal:</span> {data.cp}</p>
                            <p><span> Calle:</span> {data.street}</p>    
                        </div>

                        <NavLink to={'/profile/update'} >cambiar</NavLink>
                    </div>
                    <div className="infoContainer">
                        <label>Total: </label><p>${cart.total}</p>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={() => checkOut(quantity, totalPrice, cart.products)} >Finalizar compra</button>
                    </div>
                </div>
                <div className="productsInfo">
                    {
                        cart.products ?
                            cart.products.map(product => <CardProductResume key={product.id} {...product} />) :
                            <p>NO HAY PRODUCTOS</p>
                    }
                </div>
                <button className='cleanButton' onClick={
                    () => dispatch(cleanCart())
                }  >Limpiar carrito <FontAwesomeIcon icon={faTrash} /> </button>
            </div>
        </CartResumeContainer>
    )
}
