import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"


export const login = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/login'

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const data = await fetch(url, options)
    const res = await data.json()
    if (!res.idToken) {
        throw new Error('No ingreso')
    }
    return res
}

export const register = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/signup'

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const data = await fetch(url, options)
    const res = await data.json()

    if (!res.idToken) {
        throw new Error('No se pudo registrar el usuario')
    }
    return res
}
