import axios from "axios"

const token = localStorage.getItem('token')

export const createUser = async(data) => {
    
    try {
        const response = await axios.post('https://dronerosback-production.up.railway.app/auth/register', {data})
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const loginUser = async(email, password) => {
    try {
        const response = await axios.post('https://dronerosback-production.up.railway.app/auth/login', {
            email,
            password
        })
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateUser = async(data) =>{

    try {
        const response = await axios({
            method: 'patch',
            url: `https://dronerosback-production.up.railway.app/user/update`,
            data: data,
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