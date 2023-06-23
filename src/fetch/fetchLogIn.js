import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"

const urlLogIn = 'https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/login'

export const login = async (form) => {

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const data = await fetch(urlLogIn, options)
    const res = await data.json()
    if (!res.idToken) {
        throw new Error('No ingreso')
    }
    return res
}

const urlRegister = 'https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/signup'

export const register = async (form) => {

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const data = await fetch(urlRegister, options)
    const res = await data.json()

    const dataLogIn = await fetch(urlLogIn, options)
    const resLogIn = await dataLogIn.json()

    if (!resLogIn.idToken) {
        throw new Error('No se pudo registrar el usuario')
    }

    return resLogIn
    

}
