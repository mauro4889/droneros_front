import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { deleteCategory } from '../../axios/category'
import { DetailCategoryContainer } from './DetailCategoryStyle'

export const DetailCategory = ({ id, categoryName }) => {

  const deleted = async (id) => {
    try {
      const response = await deleteCategory(id)

      if (response.data.success) {
        alert('CATEGORIA ELIMINADA')
      } else {
        alert('ERROR AL ELIMINAR LA CATEGORIA')
      }

    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <DetailCategoryContainer>
      <p> {id} </p>
      <p> {categoryName} </p>
      <div>
        <NavLink to='/admin/panel/category/update' state={{ categoryId: id }} ><button><FontAwesomeIcon icon={faPencil} /></button></NavLink>
        <button onClick={() => deleted(id)} ><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </DetailCategoryContainer>
  )
}
