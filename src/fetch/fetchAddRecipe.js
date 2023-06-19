import { HEADERS_CONTENT_TYPE } from "../constant/myConstant"


export const AddRecipeFetch = async (idToken, form) => {    
    console.log(form,'--formAdd')

    try {
     const url = `https://backend-recipes-bootcamps-tribe.onrender.com/api/recipes/add?auth=${idToken}`

    const options = {
        method: 'POST',
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify(form)
    }
    
    const data = await fetch(url, options)
    const res = await data.json()
    console.log(data,'--data')

    if(res.errors){
        throw new Error(`Error: ${res.errors}`)
    }

    return res

    } catch (error) {
        console.log(error,'---ERROR')
    }
    
}
