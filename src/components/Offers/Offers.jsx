import React from 'react'
import { CardProduct } from '../CardProduct/CardProduct'
import { ContainerOfferStyle, ContainerProductsStyle } from './OffersStyle'

export const Offers = () => {
    return (
        <ContainerOfferStyle>
            <h2>OFERTAS DE LA SEMANA</h2>
            <ContainerProductsStyle>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </ContainerProductsStyle>
        </ContainerOfferStyle>
    )
}
