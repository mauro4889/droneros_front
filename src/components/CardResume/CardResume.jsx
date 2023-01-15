import { format } from 'date-fns';
import React from 'react'
import { CardResumeContainer } from './CardResumeStyle'

export const CardResume = (product) => {
    const { date, quantity, products, totalPrice } = product

    const argentinianFormat = "dd/MM/yyyy HH:mm:ss";
    const formatDate = format(new Date(date), argentinianFormat);

    return (
        <CardResumeContainer>
            <p>FECHA: <span>{formatDate}</span></p>
            {
                products ?
                products.map(product => <p>PRODUCTO: <span>{product.name} {product.price} </span> </p> ) :
                <p>Hubo un error</p>
            }
            <p>CANTIDAD DE PRODUCTOS: <span> {quantity} </span> </p>
            <p>TOTAL: <span> {totalPrice} </span> </p>
        </CardResumeContainer>
    )
}
