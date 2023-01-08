import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CartContainer } from './CartStyle'

export const Cart = () => {
    return (
        <CartContainer>
            <div className="badgeCounter">
                5
            </div>
            <button><FontAwesomeIcon icon={faCartShopping} /></button>
        </CartContainer>
    )
}
