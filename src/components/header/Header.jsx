import { useGlobalContext } from "../../context/GlobalContext"
import { UserLog } from "../icons"
import { Button } from "@tremor/react"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const { userData, setUserData } = useGlobalContext()
  const go = useNavigate()

  const handlerSession = () => {
    setUserData({})
    go('/')
  }

  return (
    <>
      <header className="h-10 bg-gray-800 text-gray-200">
        <div className="px-1 sm:px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex gap-4">
              <h1>Logo</h1>
              {userData.email ? (
                <Button
                  variant="light"
                  onClick={() => go('/wall/crear')}
                >
                  Crear
                </Button>
              ) :
                <>
                </>
              }
            </div>
            <div>
              {userData.email ? (
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1">
                    <UserLog />
                    <h2>{userData.email}</h2>
                  </div>
                  <Button
                    variant="light"
                    onClick={handlerSession}
                  >
                    Cerrar sesion</Button>
                </div>
              ) :
                <>
                </>
              }

            </div>
          </div>
        </div>
      </header>
    </>
  )
}
