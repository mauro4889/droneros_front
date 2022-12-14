import axios from "axios"

const token = localStorage.getItem('token')

export const addCategory = async (categoryName) =>{
    try {
        const created = await axios({
            method: 'post',
            url: 'http://localhost:3002/category',
            data:{
                categoryName
            },
            headers: {
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        })
        return created
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getAllCategory = async() => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3002/category',
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

export const updateCategory = async (id, categoryName) => {
    try {
        const response = await axios({
            method: 'patch',
            url: `http://localhost:3002/category/${id}`,
            data: categoryName,
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

export const deleteCategory = async (id) =>{
    console.log(id)
    try {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:3002/category/${id}`,
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