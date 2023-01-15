import axios from "axios"

const token = localStorage.getItem('token')

export const createResume = async (quantity, totalPrice, products) =>{
    
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3002/resume/',
            data: {
                quantity,
                totalPrice,
                products
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

export const getAllResume = async () =>{
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3002/resume/',
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