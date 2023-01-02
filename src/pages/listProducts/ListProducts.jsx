import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { DetailProduct } from '../../components/DetailProduct/DetailProduct'
import { ContainerProductsDetail, ListProductsContainer } from './ListProductsStyle'

export const ListProducts = () => {
    return (
        <ListProductsContainer>
            <h2>Lista de todos los productos</h2>
            <NavLink to='/admin/panel'><button className='backButton' > <FontAwesomeIcon icon={faArrowLeft} /> Volver </button> </NavLink>
            <ContainerProductsDetail>
                <div className="header-details">
                    <p>ID</p>
                    <p>NOMBRE</p>
                    <p>DESCRIPCION</p>
                    <p>PRECIO</p>
                    <p>ACCION</p>
                </div>
                <DetailProduct/>
                <DetailProduct/>
                <DetailProduct/>
                <DetailProduct/>
            </ContainerProductsDetail>
        </ListProductsContainer>
    )
}
