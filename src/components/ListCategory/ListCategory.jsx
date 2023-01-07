import React, { useEffect, useState } from 'react'
import { ListCategoryContainer } from './ListCategoryStyle'
import { getAllCategory } from '../../axios/category'
import { DetailCategory } from '../DetailCategory/DetailCategory'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const ListCategory = () => {
    const [isCategory, setIsCategory] = useState()

    const category = async () => {
        try {
            const data = await getAllCategory()
            setIsCategory(data.data)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        category()
    }, [])

    return (
        <ListCategoryContainer>
            <h3>LISTA DE CATEGORIAS</h3>
            <NavLink to='/admin/panel/category'><button className='backButton' > <FontAwesomeIcon icon={faArrowLeft} /> Volver </button> </NavLink>
            <div className="categoryAction">
                <label>ID</label>
                <label>NOMBRE</label>
                <label>ACCION</label>
            </div>
            {
                isCategory ?
                isCategory.data.map(category => <DetailCategory key={isCategory.data?.id} {...category} />) :
                <p>Hubo un error</p>
            }
        </ListCategoryContainer>
    )
}
