import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { ContainerFilter, ContainerProducts, FilterContainer, ProductsContainerStyle } from './ProductsStyle'
import portada from '../../assets/img/products/portada.jpg'

const variants = {
    open: { left: 0},
    close: {left: '-10em'}
}


export const Products = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <ProductsContainerStyle>
            <img src={portada} alt="Portada" className='portada' />
            <h2>Nuestros Productos</h2>
            <ContainerFilter>
                <button onClick={()=> setOpen(true)}>Filtrar<FontAwesomeIcon icon={faFilter} className='icon' /></button>
                <form>
                    <label>Ordenar por</label>
                    <select name="" id="">
                        <option value="Mayor">Mayor precio</option>
                        <option value="Menor">Menor precio</option>
                        <option value="Nuevo">Mas nuevo</option>
                        <option value="Viejo">Menos nuevo</option>
                    </select>
                </form>
            </ContainerFilter>
            <FilterContainer
                animate={isOpen ? "open" : "close"}
                variants={variants}>
            <FontAwesomeIcon icon={faXmark} className='iconClose' onClick={()=>setOpen(false)} />
                <ul>
                    <li>Fotogafria</li>
                    <li>FPV</li>
                    <li>Principiantes</li>
                    <li>Agricultura</li>
                    <li>Accesosorios</li>
                </ul>
            </FilterContainer>
            <ContainerProducts>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </ContainerProducts>
        </ProductsContainerStyle>
    )
}
