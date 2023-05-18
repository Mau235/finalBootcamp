
export const useLogin = async () => {

    const url = 'https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/auth/login'

    const header = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res   = await fetch(url,header)
    const data  = await res.json()

    return data
}
