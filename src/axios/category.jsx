import axios from "axios"

const token = localStorage.getItem('token')

export const addCategory = async (categoryName) =>{
    try {
        const created = await axios({
            method: 'post',
            url: 'https://dronerosback-production.up.railway.app/category',
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
            url: 'https://dronerosback-production.up.railway.app/category',
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
            url: `https://dronerosback-production.up.railway.app/category/${id}`,
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
            url: `https://dronerosback-production.up.railway.app/category/${id}`,
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