import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Index } from '../pages/index/Index'
import { Login } from '../pages/login/Login'
import { Products } from '../pages/products/Products'


export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='login' element={<Login/>}/>
        </ReactDomRoutes>
    )
}
