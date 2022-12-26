import axios from "axios"

export const createUser = async(firstname, lastname, email, password) => {
    try {
        const response = await axios.post('http://localhost:3001/auth/register', {
            email,
            password,
            firstname,
            lastname,
        })

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const loginUser = async(email, password) => {
    try {
        const response = await axios.post('http://localhost:3001/auth/login', {
            email,
            password
        })
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}