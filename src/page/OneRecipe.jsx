import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useLayoutEffect, useState } from "react"
import { BODY_CONTAINER } from "../constant/myConstant"
import { Badge, Button, Divider, Metric, Text, Title } from "@tremor/react"
import { back, buy, plus } from "../components/icons"
import { useGlobalContext } from "../context/GlobalContext"

export default function OneRecipe() {
  const [recip, setRecip] = useState(null)
  const { id } = useParams()
  const { getOneRecipe } = useGlobalContext()
  const go = useNavigate()

  useEffect(() => {
    setRecip(getOneRecipe(id))
  }, [])

  return (
    <>
      {recip !== null ? (
        <div className={BODY_CONTAINER}>
          <div className="flex gap-4 bg-white rounded-lg border-2 border-black ">
            <img
              src={recip.imagePath}
              alt={recip.description}
              className="max-w-[50%] rounded-tl-lg rounded-tr-gl"
            />
            <div className="my-auto p-6">
              <Metric className="-ml-[2px]">{recip.name}</Metric>
              <Title className="font-medium mt-4">{recip.description}</Title>
              <Divider />
              <Text>Productos para preparar la receta de forma correcta</Text>
              <ul>
                {recip.ingredients.map((ingredient) => (
                  <Badge key={ingredient} className="mr-1 my-1">
                    <span className="text-lg">{ingredient.name}</span>
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

