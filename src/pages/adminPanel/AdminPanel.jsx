import React from 'react'
import { NavLink } from 'react-router-dom'
import { AdminPanelContainer } from './AdminPanelStyle'

export const AdminPanel = () => {
    return (
        <AdminPanelContainer>
            <h2>PANEL ADMINISTRADOR</h2>
            <p>Aquí podra realizar distintas acciones de los productos</p>
            <div className="container-options">
                <NavLink to='listproducts' ><button>Listar productos</button></NavLink>
                <NavLink to='addproduct' ><button>Agregar producto</button></NavLink>
                <NavLink to='category' ><button>Categorias</button></NavLink>
            </div>
        </AdminPanelContainer>
    )
}
