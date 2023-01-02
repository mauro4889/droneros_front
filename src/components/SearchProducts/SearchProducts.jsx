import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchProductContainer } from './SearchProductsStyle'

export const SearchProducts = () => {
    return (
        <SearchProductContainer>
            <h3>Busca uno o varios productos</h3>
            <NavLink to='/admin/panel'><button className='backButton' > <FontAwesomeIcon icon={faArrowLeft} /> Volver </button> </NavLink>
            <form action="">
                <label>NOMBRE</label>
                <input type="text" />

                <label>CATEGORIA</label>
                <input type="text" />

                <label>ID</label>
                <input type="text" />

                <button>BUSCAR</button>
            </form>
        </SearchProductContainer>
    )
}
