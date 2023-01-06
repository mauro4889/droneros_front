import React, { useEffect, useState } from 'react'
import { ListCategoryContainer } from './ListCategoryStyle'
import { getAllCategory } from '../../axios/category'
import { DetailCategory } from '../DetailCategory/DetailCategory'

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

    console.log(isCategory)

    useEffect(() => {
        category()
    }, [])

    return (
        <ListCategoryContainer>
            <h3>LISTA DE CATEGORIAS</h3>
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
