import axios from "axios"

const token = localStorage.getItem('token')


export const addProduct = async (productName, description, price, stock, img, category) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/products/',
            data: {
                productName,
                description,
                price,
                stock,
                img,
                category,
            },
            headers: {
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/products/${id}`)

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateProduct = async (id, ...data) => {
    try {
        const response = await axios.patch(`http://localhost:3001/products/${id}`, {
            ...data,
            headers: {
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:3001/products/${id}`,
            headers: {
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getAllProducts = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3001/products',
            headers: {
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}