import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { ContainerFilter, ContainerProducts, FilterContainer, ProductsContainerStyle } from './ProductsStyle'
import portada from '../../assets/img/products/portada.jpg'



const variants = {
    open: { left: 0},
    close: {left: '-15em'}
}


export const Products = () => {
    const [isOpen, setOpen] = useState(false)
    const btnCloseRef = useRef()
    const btnOpenRef = useRef()

    useEffect(()=>{
        const closeMenu = e =>{
            
            if (e.path[0] !== btnCloseRef.current && e.path[0] !== btnOpenRef.current){
                setOpen(false)
            }
        }

        document.body.addEventListener('click', closeMenu)

        return ()=> document.body.removeEventListener('click', closeMenu)
    }, [])


    return (
        <ProductsContainerStyle>
            <img src={portada} alt="Portada" className='portada' />
            <h2>Nuestros Productos</h2>
            <ContainerFilter>
                <button ref={btnOpenRef} onClick={()=> setOpen(true)}>Filtrar<FontAwesomeIcon icon={faFilter}/></button>
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
            <button ref={btnCloseRef} onClick={()=>setOpen(false)} ><FontAwesomeIcon icon={faXmark} className='iconClose'/></button>
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
