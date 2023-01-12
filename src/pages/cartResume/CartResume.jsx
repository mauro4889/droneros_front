import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createResume } from '../../axios/resume'
import { CardProductResume } from '../../components/CardProductResume/CardProductResume'
import { cleanCart } from '../../redux/cart/cartReducer'
import { CartResumeContainer } from './CartResumeStyle'

export const CartResume = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const dateTime = new Date()
    const quantity = cart.products.length
    const totalPrice = cart.total

    const checkOut = async (quantity, totalPrice) => {
        if (!cart) {
            alert('El carrito esta vacio')
        }
        try {
            const created = await createResume(quantity, totalPrice)
            console.log(created)
            return alert('Gracias por su compra')
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
                        <label>Envio: </label><p>direccion</p>
                    </div>
                    <div className="infoContainer">
                        <label>Total: </label><p>${cart.total}</p>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={()=> checkOut(quantity, totalPrice, cart.products)} >Finalizar compra</button>
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
