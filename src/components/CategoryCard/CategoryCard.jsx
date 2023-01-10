import React from 'react'
import { CardDroneCategotyStyle, ContainerCategoryStyle, ContainerDronesStyle } from './CardCatgoryStyle'
import fotografia from '../../assets/img/category/fotografia.webp'
import fpv from '../../assets/img/category/fpv.webp'
import principiantes from '../../assets/img/category/principiantes.png'
import agricultura from '../../assets/img/category/agricultura.webp'
import { useNavigate } from 'react-router-dom'

export const CategoryCard = () => {
    const navigate = useNavigate()
    return (
        <ContainerCategoryStyle>
            <h2>Drones</h2>
            <ContainerDronesStyle>
                <CardDroneCategotyStyle onClick={()=>navigate('products')} >
                    <img src={fotografia} alt="Fotografia" />
                    <p>Fotografia</p>
                </CardDroneCategotyStyle>
                <CardDroneCategotyStyle onClick={()=>navigate('products')} >
                    <img src={fpv} alt="FPV" />
                    <p>FPV</p>
                </CardDroneCategotyStyle>
                <CardDroneCategotyStyle onClick={()=>navigate('products')} >
                    <img src={principiantes} alt="Principiantes" />
                    <p>Principiantes</p>
                </CardDroneCategotyStyle>
                <CardDroneCategotyStyle onClick={()=>navigate('products')} >
                    <img src={agricultura} alt="Agricultura" />
                    <p>Agricultura</p>
                </CardDroneCategotyStyle>
            </ContainerDronesStyle>
        </ContainerCategoryStyle>
    )
}
