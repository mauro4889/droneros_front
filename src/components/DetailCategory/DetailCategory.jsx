import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { DetailCategoryContainer } from './DetailCategoryStyle'

export const DetailCategory = ({id, categoryName}) => {
    
  return (
    <DetailCategoryContainer>
        <p> {id} </p>
        <p> {categoryName} </p>
        <form action="">
                <NavLink to='/admin/panel/category/update' state={{ categoryId: id }} ><button><FontAwesomeIcon icon={faPencil} /></button></NavLink>
                <button><FontAwesomeIcon icon={faTrash} /></button>
            </form>
    </DetailCategoryContainer>
  )
}
