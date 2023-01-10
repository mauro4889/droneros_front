import React from 'react'
import { ContainerStyle } from './CardStyle'
import DJI_fpv from '../../assets/img/products/DJI_fpv.jpg'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../axios/products'

export const CardProduct = ({name, description, price, img}) => {
    const dispatch = useDispatch()
    const product =[name, description, price, img]
    
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
            <button onClick={()=> dispatch(addProduct(product))} >
                COMPRAR
            </button>
        </ContainerStyle>
    )
}
