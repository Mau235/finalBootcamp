import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"


export const AddRecipeFetch = async (idToken, form) => {
    
    
    const url = `https://backend-recipes-bootcamps-tribe.onrender.com/api/recipes/add?auth=${idToken}`

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }
    const data = await fetch(url, options)
    const res = await data.json()
    console.log(res,'--res')
    return res
}
