import axios from "axios"

const token = localStorage.getItem('token')

export const addCategory = async (categoryName) =>{
    console.log(categoryName)
    try {
        const created = await axios({
            method: 'post',
            url: 'http://localhost:3001/category',
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
            url: 'http://localhost:3001/category',
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