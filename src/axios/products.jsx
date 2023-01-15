import axios from "axios"

const token = localStorage.getItem('token')


export const addProduct = async (name, description, price, stock, img, categoryId) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://dronerosback-production.up.railway.app/products/',
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
        const response = await axios.get(`https://dronerosback-production.up.railway.app/products/${id}`)

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
            url: `https://dronerosback-production.up.railway.app/products/${id}`,
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
            url: `https://dronerosback-production.up.railway.app/products/${id}`,
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
            url: 'https://dronerosback-production.up.railway.app/products',
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
            url: `https://dronerosback-production.up.railway.app/filter/${id}`,
        })
        return response.data.data.products
    } catch (error) {
        
    }
}