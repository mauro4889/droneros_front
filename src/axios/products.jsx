import axios from "axios"

const token = localStorage.getItem('token')


export const addProduct = async (name, description, price, stock, img, categoryId) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3002/products/',
            data: {
                name,
                description,
                price,
                stock,
                img,
                categoryId,
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
        const response = await axios.get(`http://localhost:3002/products/${id}`)

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateProduct = async (id, ...data) => {
    try {
        const response = await axios({
            method: 'patch',
            url: `http://localhost:3002/products/${id}`,
            data: data[0],
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
            url: `http://localhost:3002/products/${id}`,
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
            url: 'http://localhost:3002/products',
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

export const getProductForCategory = async (id) =>{
    
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3002/products/filter/${id}`,
        })
        return response.data.data.products
    } catch (error) {
        
    }
}