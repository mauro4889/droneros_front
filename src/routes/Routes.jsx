import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes as ReactDomRoutes, Route, Navigate } from 'react-router-dom'
import { AddCategory } from '../components/AddCategory/AddCategory'
import { ListCategory } from '../components/ListCategory/ListCategory'
import { ProfileUpdate } from '../components/ProfileUpdate/ProfileUpdate'
import { SearchProducts } from '../components/SearchProducts/SearchProducts'
import { UpdateCategory } from '../components/UpdateCategory/UpdateCategory'
import { UpdateProduct } from '../components/UpdateProduct/UpdateProduct'
import { AddProduct } from '../pages/addProduct/AddProduct'
import { AdminPanel } from '../pages/adminPanel/AdminPanel'
import { CartResume } from '../pages/cartResume/CartResume'
import { Category } from '../pages/category/Category'
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
            <Route path='admin/panel/category' element={isLoged ? <Category /> : (<Navigate to="/login" />)}/>
            <Route path='admin/panel/category/add' element={isLoged ? <AddCategory /> : (<Navigate to="/login" />)}/>
            <Route path='admin/panel/category/list' element={isLoged ? <ListCategory /> : (<Navigate to="/login" />)}/>
            <Route path='admin/panel/category/update' element={isLoged ? <UpdateCategory /> : (<Navigate to="/login" />)}/>
            <Route path='profile' element={isLoged ? <Profile /> : (<Navigate to="/login" />)} />
            <Route path='profile/update' element={isLoged ? <ProfileUpdate /> : (<Navigate to="/login" />)} />
            <Route path='cartresume' element={isLoged ? <CartResume/> : (<Navigate to="/login" />) } />
        </ReactDomRoutes>
    )
}
