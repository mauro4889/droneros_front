import { useEffect } from 'react'
import { useState } from 'react'
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
    const [isLoged, setIsLoged] = useState(false)
    const user = useSelector((state) => state.isLogin)
    const data = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (data?.firstname) {
            setIsLoged(true)
        }
    }, [data])

    return (
        <ReactDomRoutes>
            <Route path='/' element={<Index />} />
            <Route path='products' element={<Products />} />
            <Route path='login' element={isLoged ? (<Navigate to="/" />) : <Login />} />
            <Route path='createacount' element={isLoged ? (<Navigate to="/" />) : <CreateAcount />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='admin/panel' element={isLoged ? <AdminPanel /> : (<Navigate to="/login" />)} />
            <Route path='admin/panel/addproduct' element={isLoged ? <AddProduct /> : (<Navigate to="/login" />)} />
            <Route path='admin/panel/listproducts' element={isLoged ? <ListProducts /> : (<Navigate to="/login" />)} />
            <Route path='admin/panel/updateproduct' element={isLoged ? <UpdateProduct /> : (<Navigate to="/login" />)} />
            <Route path='admin/panel/searchproducts' element={isLoged ? <SearchProducts /> : (<Navigate to="/login" />)} />
            <Route path='profile' element={isLoged ? <Profile /> : (<Navigate to="/login" />)} />
            <Route path='profile/update' element={isLoged ? <ProfileUpdate /> : (<Navigate to="/login" />)} />
        </ReactDomRoutes>
    )
}
