import axios from "axios"

const token = localStorage.getItem('token')

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