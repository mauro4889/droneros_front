import { useSelector } from 'react-redux'
import { Routes as ReactDomRoutes, Route, Navigate } from 'react-router-dom'
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
    const user = useSelector((state) => state.isLogin)
    console.log(user)
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Index />} />
            <Route path='products' element={<Products />} />
            <Route path='login' element={ user ? (<Navigate to="/"/>) : <Login />} />
            <Route path='createacount' element={ user ? (<Navigate to="/"/>) : <CreateAcount />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='admin/panel' element={ user ? <AdminPanel /> : (<Navigate to="/login"/>)} />
            <Route path='admin/panel/addproduct' element={ user ? <AddProduct /> : (<Navigate to="/login"/>)} />
            <Route path='admin/panel/listproducts' element={ user ? <ListProducts /> : (<Navigate to="/login"/>)} />
            <Route path='admin/panel/listproducts/update' element={ user ? <UpdateProduct /> : (<Navigate to="/login"/>)} />
            <Route path='admin/panel/searchproducts' element={ user ? <SearchProducts /> : (<Navigate to="/login"/>)} />
            <Route path='profile' element={user ? <Profile /> : (<Navigate to="/login"/>)} />
            <Route path='profile/update' element={ user ? <ProfileUpdate /> : (<Navigate to="/login"/>)} />
        </ReactDomRoutes>
    )
}
