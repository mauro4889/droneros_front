import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllProducts } from '../../axios/products'
import { DetailProduct } from '../../components/DetailProduct/DetailProduct'
import { ContainerProductsDetail, ListProductsContainer } from './ListProductsStyle'

export const ListProducts = () => {
    const [isProducts, setIsProducts] = useState()

    const products = async () => {
        try {
            const data = await getAllProducts()
            setIsProducts(data.data)
        } catch (error) {
            return error
        }
    }

    console.log(isProducts)

    useEffect(()=>{
        products()
    }, [])

    return (
        <ListProductsContainer>
            <h2>Lista de todos los productos</h2>
            <NavLink to='/admin/panel'><button className='backButton' > <FontAwesomeIcon icon={faArrowLeft} /> Volver </button> </NavLink>
            <ContainerProductsDetail>
                <div className="header-details">
                    <p>CATEGORIA</p>
                    <p>NOMBRE</p>
                    <p>DESCRIPCION</p>
                    <p>PRECIO</p>
                    <p>STOCK</p>
                    <p>ACCION</p>
                </div>
                {
                    isProducts ? 
                    isProducts.data.map( product => <DetailProduct key={isProducts.data?.id} {...product} />) :
                    <p>Hubo un error</p>
                }
                
            </ContainerProductsDetail>
        </ListProductsContainer>
    )
}
