import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, restToCart } from '../../redux/cart/cartReducer'
import { CardProductResumeContainer } from './CardProductResumeStyle'

export const CardProductResume = ({name, price, img, quantity, id, description}) => {
    const dispatch = useDispatch()
    
    return (
        <CardProductResumeContainer>
            <img src={img} alt={name} />
            <p> {name} </p>
            <p>${price}</p>
            <p>Cantidad: {quantity}</p>
            <div className="containerButton">
                <button className='addProduct' onClick={
                    ()=> dispatch(addToCart({id: id})) 
                } >+</button>
                <button className='restProduct' onClick={
                    ()=> dispatch(restToCart({id: id})) 
                } >-</button>
            </div>
        </CardProductResumeContainer>
    )
}
