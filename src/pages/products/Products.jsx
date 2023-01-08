import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { ContainerFilter, ContainerProducts, FilterContainer, ProductsContainerStyle } from './ProductsStyle'
import portada from '../../assets/img/products/portada.jpg'
import { getAllCategory } from '../../axios/category'
import { getAllProducts } from '../../axios/products'



const variants = {
    open: { left: 0 },
    close: { left: '-15em' }
}


export const Products = () => {
    const [isOpen, setOpen] = useState(false)
    const [isCategory, setIsCategory] = useState()
    const [isProducts, setIsProducts] = useState()
    const btnCloseRef = useRef()
    const btnOpenRef = useRef()

    const getCategoty = async () => {
        try {
            const { data } = await getAllCategory()
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

    useEffect(() => {
        const closeMenu = e => {

            if (e.path[0] !== btnCloseRef.current && e.path[0] !== btnOpenRef.current) {
                setOpen(false)
            }
        }

        document.body.addEventListener('click', closeMenu)

        return () => document.body.removeEventListener('click', closeMenu)
    }, [])

    useEffect(() => {
        getCategoty()
        getProducts()
    }, [])


    return (
        <ProductsContainerStyle>
            <img src={portada} alt="Portada" className='portada' />
            <h2>Nuestros Productos</h2>
            <ContainerFilter>
                <form>
                    <label>Ordenar por</label>
                    <select name="" id="">
                        <option value="Mayor">Mayor precio</option>
                        <option value="Menor">Menor precio</option>
                        <option value="Nuevo">Mas nuevo</option>
                        <option value="Viejo">Menos nuevo</option>
                    </select>
                </form>
                <select>
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
                isProducts.map(product => <CardProduct key={isProducts.data?.id} {...product} />) :
                <p>Hubo un error</p>
            }
            </ContainerProducts>
        </ProductsContainerStyle>
    )
}
