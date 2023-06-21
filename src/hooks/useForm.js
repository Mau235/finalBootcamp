import { useState } from "react"

export const useForm = () => {
    const [form, setForm] = useState({})

    const buildForm = (event)=> {
        const { value, name } = event.target;
        setForm({
          ...form,
          [name]: value,
        });        
    }

    const equalForm = (res) => setForm(res)

    const addIngredient = (ingr) =>{
        setForm({
            ...form,
            ingredients: ingr
          })
    }
    return {
        form,
        buildForm,
        equalForm,
        addIngredient
    }
}