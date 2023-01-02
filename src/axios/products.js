import axios from "axios"


export const addProduct = async(productName, description, price, stock, category ) => {
    try {
        const response = await axios.post('http://localhost:3001/products/',{
            productName,
            description,
            price,
            stock,
            category
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getProductById = async(id) => {
    try {
        const response = await axios.get(`http://localhost:3001/products/${id}`)

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateProduct = async(id, ...data) => {
    try {
        const response = await axios.patch(`http://localhost:3001/products/${id}`,{
            ...data
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteProduct = async(id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/products/${id}`)

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getAllProducts = async() => {
    try {
        const response = await axios.get('http://localhost3001/products')

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}