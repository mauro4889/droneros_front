import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { deleteProduct } from '../../axios/products'
import { DetailProductContainer } from './DetailProductStyle'

export const DetailProduct = ({id, name, description, price, stock, category}) => {

    const deleted = async(id) => {
        try {
            return await deleteProduct(id)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    return (
        <DetailProductContainer>
            <p className="category">{category.categoryName}</p>
            <p> {name} </p>
            <p> {description} </p>
            <p>$ {price} </p>
            <p> {stock} </p>
            <div className='containerButtons' >
                <NavLink to='/admin/panel/updateproduct' state={{ productId: id }} ><button><FontAwesomeIcon icon={faPencil} /></button></NavLink>
                <button onClick={() => deleted(id)} ><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </DetailProductContainer>
    )
}
