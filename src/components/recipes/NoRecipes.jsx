import { Button } from "@tremor/react";
import { plus } from "../icons";


export default function NoRecipes() {
  return (
    <div className="w-full h-[400px] bg-gray-50 flex justify-center items-center z-20 rounded-lg border-2 border-black ">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">Todavia no tienes recetas creadas </h2>
        <div className="flex justify-center mt-8">
          <Button
            variant="primary"
            icon={plus}
          >
            Crear recetas
          </Button>

        </div>
      </div>
    </div>
  )
}
