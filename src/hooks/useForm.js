import { useState } from "react"
import { createId } from "../helpers/tools"
import { formInitialsValue } from "../constant/initialsState"

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

    const addIngredient = (ingr) => {    

      const objIngredient = {
        _id: createId(),
        name: ingr
      }
      form.ingredients = [
        ...form.ingredient ,
        objIngredient
      ]
    }
    const deleteIngredients = (id) => {
      console.log(id,'----------SIIIIIIII')
      const obj = form.ingredients.filter(ingr => ingr._id === id)
      form.ingredients = obj
    }
    return {
        form,
        buildForm,
        equalForm,
        addIngredient,
        deleteIngredients
    }
}