import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { DetailProductContainer } from './DetailProductStyle'

export const DetailProduct = () => {
    return (
        <DetailProductContainer>
            <p className="id">1</p>
            <p>Drone FPV</p>
            <p>Para mayor placer</p>
            <p>8000</p>
            <form action="">
                <NavLink to='update' ><button><FontAwesomeIcon icon={faPencil} /></button></NavLink>
                <button><FontAwesomeIcon icon={faTrash} /></button>
            </form>
        </DetailProductContainer>
    )
}
