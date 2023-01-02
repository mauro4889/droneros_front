import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { ProfileUpdate } from '../components/ProfileUpdate/ProfileUpdate'
import { SearchProducts } from '../components/SearchProducts/SearchProducts'
import { UpdateProduct } from '../components/UpdateProduct/UpdateProduct'
import { AddProduct } from '../pages/addProduct/AddProduct'
import { AdminPanel } from '../pages/adminPanel/AdminPanel'
import { CreateAcount } from '../pages/createAcount/CreateAcount'
import { ErrorPage } from '../pages/errorPage/ErrorPage'
import { Index } from '../pages/index/Index'
import { ListProducts } from '../pages/listProducts/ListProducts'
import { Login } from '../pages/login/Login'
import { Products } from '../pages/products/Products'
import { Profile } from '../pages/profile/Profile'


export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Index/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='createacount' element={<CreateAcount/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='admin/panel' element={<AdminPanel/>}/>
            <Route path='admin/panel/addproduct' element={<AddProduct/>}/>
            <Route path='admin/panel/listproducts' element={<ListProducts/>}/>
            <Route path='admin/panel/listproducts/update' element={<UpdateProduct/>} />
            <Route path='admin/panel/searchproducts' element={<SearchProducts/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='profile/update' element={<ProfileUpdate/>}/>
        </ReactDomRoutes>
    )
}
