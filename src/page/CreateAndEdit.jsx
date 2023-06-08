import { Badge, Button, TextInput, Title } from "@tremor/react"
import { BODY_CONTAINER } from "../constant/myConstant"
import { capitalize } from "../helpers/tools"
import { useNavigate } from "react-router-dom"
import { useReducer, useRef, useState } from "react"
import { ingregdientsReducer } from "../components/reducers/ingregdientsReducer"
import { back, deleteIco, plus } from "../components/icons"
import { toast } from "sonner"
import { useGlobalContext } from '../context/GlobalContext'
import { AddRecipeFetch } from "../fetch/fetchAddRecipe"

const Icon = {
  plus,
  delete: deleteIco
}


export default function CreateAndEdit() {
  const [stateIngredient, dispatch] = useReducer(ingregdientsReducer, [])
  const [form, setForm] = useState({})
  /*   const [opacity, setOpacity] = useState()
   */
  const ingredientsRef = useRef()
  const { userData } = useGlobalContext()
  const go = useNavigate()

  const handlerAddIngredients = () => {
    if (ingredientsRef.current.value !== '') {
      dispatch({
        type: '[INGR] ADD',
        payload: ingredientsRef.current.value
      })
      setForm({
        ...form,
        ingredients: stateIngredient
      })
      ingredientsRef.current.value = ''
    }
  }

  const handlerAddrecipes = (event) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form, '-----form')

  }

  const handlerAddRecipe = () => {
    toast.promise(AddRecipeFetch(userData.idToken, form), {
      loading: 'Agregando...',
      success: () => {
        go('/wall')
        return 'Se guardo correctamente'
      },
      error: 'Hubo un error al guardar. Intentelo nuevamente',
    })
  };

  return (
    <div className={BODY_CONTAINER}>
      <div className="grid md:grid-cols-2  bg-white rounded-lg border-2 border-black">
        <div className="flex justify-center items-center py-6 md:py-0"
          style={{
            backgroundImage: `url(${form.imagePath ?? form.imagePath})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
          }}
        >
          <div className="bg-white p-6 rounded-lg" >
            <Title className="mb-2">Ingrese la URL de la imagen</Title>
            <TextInput
              placeholder="http://image..."
              className="w-full opacity-100"
              name="imagePath"
              onChange={handlerAddrecipes}
              defaultValue="https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg"
            />
          </div>
        </div>
        <div className="border-l-2 border-black p-6">
          <div className="my-auto grid gap-4">
            <TextInput
              placeholder="Nombre"
              name='name'
              onChange={handlerAddrecipes}
              defaultValue="Pizza de pepperoni y mozzarella"
            />
            <TextInput
              placeholder="Descripción"
              name='description'
              onChange={handlerAddrecipes}
              defaultValue="Uno de los ingredientes más famosos en la elaboración de pizzas, el 'pepperoni'."
            />
            <div className="flex gap-2">
              <TextInput
                placeholder="Agregar ingredientes"
                onKeyDown={(event) => event.key === 'Enter' ? handlerAddIngredients() : ''}
                ref={ingredientsRef}
              />
              <Button onClick={handlerAddIngredients}>
                <Icon.plus />
              </Button>
            </div>
            <ul>
              {stateIngredient.map((ingredient) => (
                <Badge key={ingredient.id} className="mr-1 my-2">
                  <span className="flex  items-center">
                    <Icon.delete
                      onClick={() => dispatch({ type: '[INGR] DELETE', payload: ingredient.id })}
                      className='mr-4 hover:cursor-pointer'
                    />
                    <span className="text-lg">{capitalize(ingredient.name)}</span>
                  </span>
                </Badge>
              ))}
            </ul>
            <div className="flex justify-between">
              <Button
                variant='secondary'
                className="mt-8"
                onClick={() => go('/wall')}
                icon={back}
              >
                Volver
              </Button>
              <Button
                variant='primary'
                className="mt-8"
                icon={plus}
                onClick={handlerAddRecipe}
              >
                Agregar receta
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
