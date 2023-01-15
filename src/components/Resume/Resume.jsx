import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllResume } from '../../axios/resume'
import { CardResume } from '../CardResume/CardResume'
import { ResumeContainer } from './ResumeStyle'

export const Resume = () => {
    const [isResume, setIsResume] = useState()
    const getResume = async () => {
        try {
            const data = await getAllResume()
            if(!data.data.success){
                alert('Error al cargar resumenes')
            }
            setIsResume(data.data)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    useEffect(() => {
        getResume()
    }, [])
    
    return (
        <ResumeContainer>
            <h3>Resumen de compras</h3>
            <NavLink to='/profile'><button className='backButton' > <FontAwesomeIcon icon={faArrowLeft} /> Volver </button> </NavLink>
            <div className="resumesContainer">
            {
                isResume ?
                isResume.data.map(product => <CardResume key={product.id} {...product} />) :
                <p>Hubo un error</p>
            }
            </div>
        </ResumeContainer>
    )
}
