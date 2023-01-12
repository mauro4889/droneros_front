import React from 'react'
import { ContainerStyle } from './CardStyle'
import DJI_fpv from '../../assets/img/products/DJI_fpv.jpg'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../redux/cart/cartActions'
import { addToCart } from '../../redux/cart/cartReducer'


export const CardProduct = ({name, description, price, img, id}) => {
    const dispatch = useDispatch()
    const product =[{id: id, name: name, description: description, price: price, img: img}]
    
    return (
        <ContainerStyle>
            <img src={img} alt={name} />
            <h3>
                {name}
            </h3>
            <p>
                {description}
            </p>
            <p className='price'>
                {price}
            </p>
            <button onClick={()=> dispatch(addToCart(...product))} >
                COMPRAR
            </button>
        </ContainerStyle>
    )
}
