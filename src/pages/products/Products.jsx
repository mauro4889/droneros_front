import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { ContainerFilter, ContainerProducts, FilterContainer, ProductsContainerStyle } from './ProductsStyle'
import portada from '../../assets/img/products/portada.jpg'
import { getAllCategory } from '../../axios/category'
import { getAllProducts, getProductForCategory } from '../../axios/products'
import { useSelector } from 'react-redux'






export const Products = () => {
    const [isCategory, setIsCategory] = useState()
    const [isProducts, setIsProducts] = useState()
    

    const getCategoty = async () => {
        try {
            const { data } = await getAllCategory()
            console.log(data)
            setIsCategory(data.data)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const getProducts = async () => {
        try {
            const {data} = await getAllProducts()
            setIsProducts(data.data)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const getProductByCategory = async (id) => {
        if(!id){
            getProducts()
        }
        try {
            const data = await getProductForCategory(id)
            setIsProducts(data)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    useEffect(() => {
        getCategoty()
        getProducts()
    }, [])


    return (
        <ProductsContainerStyle>
            <img src={portada} alt="Portada" className='portada' />
            <h2>Nuestros Productos</h2>
            <ContainerFilter>
                <select onChange={(e)=> getProductByCategory(e.target.value)} >
                    <option value="" selected>---</option>
                    {isCategory?.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.categoryName}
                        </option>
                    ))}
                </select>
            </ContainerFilter>

            <ContainerProducts>
            {
                isProducts ?
                isProducts.map(product => <CardProduct key={product.id} {...product} />) :
                <p>Hubo un error</p>
            }
            </ContainerProducts>
        </ProductsContainerStyle>
    )
}
