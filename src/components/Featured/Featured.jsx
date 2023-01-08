import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllProducts } from '../../axios/products'
import { CardProduct } from '../CardProduct/CardProduct'
import { ContainerFeaturedStyle, ContainerProductsStyle } from './FeaturedStyle'

export const Featured = () => {
    const [isProducts, setIsProducts] = useState()
    const [isRandom, setIsRandom] = useState()

    const getProducts = async () => {
        try {
            const {data} = await getAllProducts()
            console.log(data)
            setIsProducts(data.data)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const randomProducts = async (products) =>{
        const randoms = []
        for(let i=0; i= 3; i++) {
            randoms.push(products[Math.floor(Math.random() * products.length)])
        }
        console.log(randoms)
    }

    useEffect(()=>{
        getProducts()
        randomProducts(isProducts)
    },[])

    return (
        <ContainerFeaturedStyle>
            <h2>PRODUCTOS DESTACADOS</h2>
            <ContainerProductsStyle>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </ContainerProductsStyle>
        </ContainerFeaturedStyle>
    )
}
