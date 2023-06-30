import { useState } from "react"

export const useForm = () => {
    const [form, setForm] = useState({})
    const [ingredients, setIngredients] = useState([])

    const buildForm = (event)=> {
        const { value, name } = event.target;
        setForm({
          ...form,
          [name]: value,
        });        
    }

    const equalForm = (res) => setForm(res)

    const addIngredient = (ingr) =>{
        setIngredients([
            ...ingredients,
            { name:ingr }
          ])
        setForm({
            ...form,
            ingredients: ingredients
          })
      console.log(form, '-----form')
      console.log(ingredients, '-----ingredients')


    }
    return {
        form,
        buildForm,
        equalForm,
        addIngredient
    }
}