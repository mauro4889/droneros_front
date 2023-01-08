import React from 'react'
import { ContainerStyle } from './CardStyle'
import DJI_fpv from '../../assets/img/products/DJI_fpv.jpg'

export const CardProduct = ({name, description, price, img}) => {
    console.log(name, description, price, img)
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
            <button>COMPRAR</button>
        </ContainerStyle>
    )
}
