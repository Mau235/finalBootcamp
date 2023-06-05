import { Badge, Button, Divider, Metric, Text, TextInput, Title } from "@tremor/react"
import { BODY_CONTAINER } from "../constant/myConstant"
import { capitalize } from "../helpers/tools"
import { useNavigate } from "react-router-dom"
import { useReducer } from "react"
import { ingregdientsReducer } from "../components/reducers/ingregdientsReducer"

const ingredients = [{ id: null, name: '' }]

export default function CreateAndEdit() {
  const go = useNavigate()
  const { state, dispatch } = useReducer(ingregdientsReducer, ingredients)
  return (
    <div className={BODY_CONTAINER}>
      <div className="flex gap-4 bg-white rounded-lg border-2 border-black py-8">
        <div className="w-[50%] rounded-tl-lg rounded-tr-gl flex justify-center items-center">
          <div className="w-[50%]">
            <Title className="mb-2">Ingrese la URL de la imagen</Title>
            <TextInput placeholder="http://image..." />
          </div>
        </div>
        <div className="my-auto grid gap-4">
          <TextInput placeholder="Nombre" />
          <TextInput placeholder="Descripción" />
          <TextInput placeholder="Agregar ingredientes" />
          <ul>
            {state.map((ingredient) => (
              <Badge key={ingredient.id} className="mr-1 my-1">
                <span className="text-lg">{capitalize(ingredient.name)}</span>
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

  )
}
