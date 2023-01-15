import axios from "axios"

const token = localStorage.getItem('token')

export const createUser = async(data) => {
    
    try {
        const response = await axios.post('http://localhost:3002/auth/register', {data})
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const loginUser = async(email, password) => {
    try {
        const response = await axios.post('http://localhost:3002/auth/login', {
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
            url: `http://localhost:3002/user/update`,
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