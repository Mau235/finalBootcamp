import { useParams, useNavigate } from "react-router-dom"
import { data } from '../data'
import { useEffect, useState } from "react"
import { BODY_CONTAINER, BODY_CONTAINER_MD } from "../constant/myConstant"
import { Badge, Button, Divider, Metric, Text, Title } from "@tremor/react"
import { capitalize } from "../helpers/tools"
import { back, buy } from "../components/icons"


export default function OneRecipe() {
  const [recip, setRecip] = useState(recipData)
  const { id } = useParams()
  const go = useNavigate()


  return (
    <>
      <div className={BODY_CONTAINER}>
        <div className="flex gap-4 bg-white rounded-lg border-2 border-black ">
          <img
            src={recip.imagePath}
            alt={recip.description}
            className="max-w-[50%] rounded-tl-lg rounded-tr-gl"
          />
          <div className="my-auto">
            <Metric className="-ml-[2px] ">{recip.name}</Metric>
            <Title className="font-medium mt-4">{recip.description}</Title>
            <Divider />
            <Text>Productos para preparar la receta de forma correcta</Text>
            <ul>
              {recip.ingredients.map((ingredient) => (
                <Badge key={ingredient} className="mr-1 my-1">
                  <span className="text-lg">{capitalize(ingredient)}</span>
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
                icon={buy}
                className="mt-8"
              >
                Agregar productos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

const recipData = {
  _id: '645bbc&yhf6eeafb49829dd3bt8',
  name: 'Pizza al horno',
  description: 'Pizza a la piedra con queso y tomates',
  ingredients: ['Arina', 'Lebadura', 'Queso', 'tomates', 'Salsa'],
  imagePath:
    'https://mccormick.widen.net/content/gc9if6yrrt/original/pizza_aux_2_tomates_et_a_la_feta_2000x1125.jpg',
  userEmail: 'admin@mail.com',
  __v: 0,
}