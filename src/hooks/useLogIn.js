import Login from "../components/home/Login"
import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"


export const useLogin = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/login'

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const data = await fetch(url, options)
    const res = await data.json()

    if (!res.idToken){
         throw new Error('No ingreso')
    }

    return res
}

export const useRegister = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/signup'

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const res = await fetch(url, options)
    const data = await res.json()

    return data
}