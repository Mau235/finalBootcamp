import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { BODY_CONTAINER, BORDER_BLACK } from "../constant/myConstant"
import { Badge, Button, Divider, Metric, Text, Title } from "@tremor/react"
import { back, plus, deleteIco } from "../components/icons"
import { useGlobalContext } from "../context/GlobalContext"
import { capitalize } from "../helpers/tools"
import { deleteRcipes } from "../fetch/fetchDelete"
import Modal from "../components/Modal"
import { toast } from "sonner"

const Icon = {
  delete: deleteIco
}

export default function OneRecipe() {
  const { getOneRecipe, userData } = useGlobalContext()
  const { id } = useParams()
  const go = useNavigate()
  const [recip, setRecip] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setRecip(getOneRecipe(id))
  }, [])

  const handlerDelete = () => {
    toast.promise(deleteRcipes(id, userData.idToken), {
      loading: 'Eliminando...',
      success: () => {
        go('/wall')
        return 'Se elimino correctamente';
      },
      error: 'No se pudo borrar',
    });
  }

  return (
    <>
      {recip !== null ? (
        <div className={BODY_CONTAINER}>
          <div className={`flex gap-4 ${BORDER_BLACK}`}>
            <Modal show={show} setShow={setShow} name={recip.name} action={() => handlerDelete()} />
            <img
              src={recip.imagePath}
              alt={recip.description}
              className="max-w-[50%] rounded-tl-lg rounded-tr-gl"
            />
            <div className="my-auto p-6 relative">
              <div className="flex justify-end ">
                <div
                  className="px-1 hover:cursor-pointer"
                  onClick={() => setShow(true)}>
                  <Icon.delete className='text-blue-800' />
                </div>
              </div>
              <Metric className="-ml-[2px]">{recip.name}</Metric>
              <Title className="font-medium mt-4">{recip.description}</Title>
              <Divider />
              <Text>Productos para preparar la receta de forma correcta</Text>
              <ul>
                {recip.ingredients.map((ingredient) => (
                  <Badge key={ingredient.id} className="mr-1 my-1">
                    <span className="text-lg">{capitalize(ingredient.name.trim())}</span>
                  </Badge>
                ))}
              </ul>
              <div className="flex justify-between">
                <Button
                  variant='secondary'
                  icon={back}
                  className="mt-8"
                  onClick={() => go('/wall')}
                >
                  Volver
                </Button>
                <Button
                  variant='primary'
                  icon={plus}
                  className="mt-8"
                >
                  Agregar productos
                </Button>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <></>
      )}

    </>
  )
}

