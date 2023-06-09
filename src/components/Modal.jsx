import { Button } from "@tremor/react";
import { BORDER_BLACK } from "../constant/myConstant";
import { back, deleteIco } from "./icons";

export default function Modal({ action, setShow }) {

  return (
    <>
      {action && (
        <div className="absolute top-0 left-0 z-30 h-screen w-screen bg-slate-500 bg-opacity-30 flex items-center justify-center">
          <div className={`absolute z-50  opacity-100 ${BORDER_BLACK} px-8 py-4`}>
            <h2 className="text-3xl p-6">Deseas borrar ??</h2>
            <div className="flex justify-between items-center">
              <Button
                variant="secondary"
                icon={back}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                icon={deleteIco}
                onClick={() => setShow(false)}
              >
                Borrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
