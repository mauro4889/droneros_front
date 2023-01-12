import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartContainer } from './CartStyle'

export const Cart = () => {
    const [isUser, setIsUser] = useState('')
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user'))
        setIsUser(data)
    }, [localStorage])


    return (
        <CartContainer>
            <div className="badgeCounter">
                {cart.products.length}
            </div>
            <button disabled={!isUser}  onClick={()=> navigate('/cartresume') } ><FontAwesomeIcon icon={faCartShopping} /></button>
        </CartContainer>
    )
}
