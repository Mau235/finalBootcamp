import { Badge, Button, TextInput, Title } from "@tremor/react"
import { BODY_CONTAINER } from "../constant/myConstant"
import { capitalize } from "../helpers/tools"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useRef, useState } from "react"
import { ingregdientsReducer } from "../components/reducers/ingregdientsReducer"
import { deleteIco, plus } from "../components/icons"

const ingredients = [{ id: null, name: '' }]
const Icon = {
  plus,
  delet: deleteIco
}

export default function CreateAndEdit() {
  const [stateIngredient, dispatch] = useReducer(ingregdientsReducer, ingredients)
  const [look, setLook] = useState(false)
  const [form, setForm] = useState({})
  const ingredientsRef = useRef()
  const go = useNavigate()

  const handlerAddIngredients = () => {
    ingredientsRef.current.value = ''
    dispatch({ type: '[INGR] Add', payload: form.ingredients })
  }

  const handlerAddrecipes = (event) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value,
    });
  }




  useEffect(() => {
    if (stateIngredient.length <= 1) {
      setLook(false)
    } else {
      setLook(true)
    }
  }, [stateIngredient])


  return (
    <div className={BODY_CONTAINER}>
      <div className="grid grid-cols-2 gap-4 bg-white rounded-lg border-2 border-black ">
        <div className="rounded-tl-lg rounded-tr-gl my-auto p-6">
          <div>
            <Title className="mb-2">Ingrese la URL de la imagen</Title>
            <TextInput
              placeholder="http://image..."
              className="w-full"
              name="imagePath"
              onChange={handlerAddrecipes}
            />
          </div>
        </div>
        <div className="border-l-2 border-black p-6">
          <div className="my-auto grid gap-4">
            <TextInput
              placeholder="Nombre"
              name='name'
              onChange={handlerAddrecipes}
            />
            <TextInput
              placeholder="Descripción"
              name='description'
              onChange={handlerAddrecipes}
            />
            <div className="flex gap-2">
              <TextInput
                placeholder="Agregar ingredientes"
                name="ingredients"
                onChange={handlerAddrecipes}
                ref={ingredientsRef}
              />
              <Button onClick={handlerAddIngredients}>
                <Icon.plus />
              </Button>
            </div>
            <ul className={look === false ? 'invisible' : 'visible'}>
              {stateIngredient.map((ingredient) => (
                <Badge key={ingredient.id} className="mr-1 my-1">
                  <span className="text-lg">{capitalize(ingredient.name)}</span>
                  <Icon.delet />
                </Badge>
              ))}
            </ul>
            <div className="flex justify-between">
              <Button
                variant='secondary'
                className="mt-8"
                onClick={() => go('/wall')}
              >
                Volver
              </Button>
              <Button
                variant='primary'
                className="mt-8"
              >
                Agregar productos
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
