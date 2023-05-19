import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"


export const useLogin = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/auth/login'

    const header = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: {
            "email":"admin@email.com",            
             "password":"123456"            
            }
    }

    console.log(header,'--headers')

    const res = await fetch(url, header)

    console.log(res,'--res')

    // const data = await res.json()

    // return data
}

export const useRegister = async (form) => {

    const url = 'https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/auth/signup'

    const header = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: form
    }

    const res = await fetch(url, header)
    const data = await res.json()

    return data
}