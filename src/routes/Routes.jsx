import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { CreateAcount } from '../pages/createAcount/CreateAcount'
import { ErrorPage } from '../pages/errorPage/ErrorPage'
import { Index } from '../pages/index/Index'
import { Login } from '../pages/login/Login'
import { Products } from '../pages/products/Products'


export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='createacount' element={<CreateAcount/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </ReactDomRoutes>
    )
}
