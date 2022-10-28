import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Index } from '../pages/index/Index'
import { Products } from '../pages/products/Products'


export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
            <Route path='products' element={<Products/>}/>
        </ReactDomRoutes>
    )
}
