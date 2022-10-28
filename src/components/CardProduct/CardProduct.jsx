import React from 'react'
import { ContainerStyle } from './CardStyle'
import DJI_fpv from '../../assets/img/products/DJI_fpv.jpg'

export const CardProduct = () => {
    return (
        <ContainerStyle>
            <img src={DJI_fpv} alt="DJI FPV" />
            <h3>DJI FPV Fly More Combo</h3>
            <p>Tu imaginacion a mas de 130km/h</p>
            <p className='price'>$499.99</p>
            <button>COMPRAR</button>
        </ContainerStyle>
    )
}
