import { Badge, Button, TextInput, Title } from "@tremor/react"
import { BODY_CONTAINER, BORDER_BLACK } from "../constant/myConstant"
import { capitalize } from "../helpers/tools"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useReducer, useRef, useState } from "react"
import { ingregdientsReducer } from "../components/reducers/ingregdientsReducer"
import { back, deleteIco, plus } from "../components/icons"
import { toast } from "sonner"
import { useGlobalContext } from '../context/GlobalContext'
import { AddRecipeFetch } from "../fetch/fetchAddRecipe"
import { EditRecipeFetch } from "../fetch/fetchEdit"

const Icon = {
  plus,
  delete: deleteIco
}


export default function CreateAndEdit() {
  const [stateIngredient, dispatch] = useReducer(ingregdientsReducer, [])
  const [form, setForm] = useState({})
  const [opacity, setOpacity] = useState(false)
  const ingredientsRef = useRef()
  const { userData, getOneRecipe } = useGlobalContext()
  const go = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const res = getOneRecipe(id)
      console.log(res)
      setForm(res)
      dispatch({
        type: '[INGR] GETALL',
        payload: res.ingredients
      })
    }
  }, [])

  const handlerFetchRecipe = () => {
    if (id) {
      console.log(userData)
      toast.promise(EditRecipeFetch(userData, form, id), {
        loading: 'Guardando cambios...',
        success: () => {
          go('/wall')
          return 'La modificacion se hizo correctamente'
        },
        error: 'Hubo un error al guardar. Intentelo nuevamente',
      })
    } else {
      toast.promise(AddRecipeFetch(userData.idToken, form), {
        loading: 'Agregando...',
        success: () => {
          go('/wall')
          return 'Se guardo correctamente'
        },
        error: 'Hubo un error al guardar. Intentelo nuevamente',
      })
    }
  };

  useEffect(() => {
    if (form.imagePath) {
      setOpacity(true)
    } else {
      setOpacity(false)
    }
  }, [form])

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

  const handlerBack = () => {
    if (id) {
      go(`/wall/receta/${id}`)
    } else {
      go(`/wall`)
    }
  }

  const handlerAddrecipes = (event) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value,
    });
  }



  return (
    <div className={BODY_CONTAINER}>
      <div className={`grid md:grid-cols-2 ${BORDER_BLACK}`} >
        <div className="flex justify-center items-center py-6 md:py-0 "
          style={{
            backgroundImage: `url(${form.imagePath ?? form.imagePath})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
          }}
        >
          <div className={`bg-white p-6 rounded-lg ${opacity ? 'bg-opacity-70 ' : 'shadow-xl'}`} >
            <Title className="mb-2">Ingrese la URL de la imagen</Title>
            <TextInput
              placeholder="http://image..."
              className="w-full "
              name="imagePath"
              onChange={handlerAddrecipes}
              defaultValue={form.imagePath ?? form.imagePath}
            />
          </div>
        </div>
        <div className="border-l-2 border-black p-6">
          <div className="my-auto grid gap-4">
            <TextInput
              placeholder="Nombre"
              name='name'
              onChange={handlerAddrecipes}
              className="shadow-xl"
              defaultValue={form.name ?? form.name}
            />
            <TextInput
              placeholder="Descripción"
              name='description'
              onChange={handlerAddrecipes}
              className="shadow-xl"
              defaultValue={form.description ?? form.description}
            />
            <div className="flex gap-2">
              <TextInput
                placeholder="Agregar ingredientes"
                onKeyDown={(event) => event.key === 'Enter' ? handlerAddIngredients() : ''}
                className="shadow-xl"
                ref={ingredientsRef}
              />
              <Button onClick={handlerAddIngredients}>
                <Icon.plus />
              </Button>
            </div>
            <ul className="flex flex-col">
              {stateIngredient.map((ingredient) => (
                <Badge key={ingredient.id} className="mr-1 my-2">
                  <span
                    className="flex items-center"
                    onClick={() => dispatch({ type: '[INGR] DELETE', payload: ingredient._id })}
                  >
                    <Icon.delete
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
                onClick={handlerBack}
                icon={back}
              >
                Volver
              </Button>
              <Button
                variant='primary'
                className="mt-8"
                icon={plus}
                onClick={handlerFetchRecipe}
              >
                {id ? 'Modificar' : 'Agregar receta'}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
