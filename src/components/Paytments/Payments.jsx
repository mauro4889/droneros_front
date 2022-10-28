import { faAward, faCreditCard, faDollar, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ContainerStyle, PaymentStyle } from './PaymentsStyle'

export const Payments = () => {
    return (
        <PaymentStyle>
            <ContainerStyle>
            <FontAwesomeIcon icon={faDollar} className='icon' />
                <p>Mejor precio del mercado</p>
            </ContainerStyle>
            <ContainerStyle>
            <FontAwesomeIcon icon={faCreditCard} className='icon'/>
                <p>Pagá en hasta 24 cuotas</p>
            </ContainerStyle>
            <ContainerStyle>
            <FontAwesomeIcon icon={faTruck} className='icon'/>
                <p>Envio a todo el país</p>
            </ContainerStyle>
            <ContainerStyle>
            <FontAwesomeIcon icon={faAward} className='icon' />
                <p>Garantía de satisfacción</p>
            </ContainerStyle>
        </PaymentStyle>
    )
}
