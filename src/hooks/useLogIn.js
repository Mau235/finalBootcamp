import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"


export const useLogin = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/auth/login'

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const res = await fetch(url, options)
    const data = await res.json()

}

export const useRegister = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/auth/signup'

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }

    const res = await fetch(url, options)
    const data = await res.json()

    return data
}