import axios from "axios"

const token = localStorage.getItem('token')

export const createResume = async (quantity, totalPrice, products) =>{
    
    try {
        const response = await axios({
            method: 'post',
            url: 'https://dronerosback-production.up.railway.app/resume/',
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
            url: 'https://dronerosback-production.up.railway.app/resume/',
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