import { useEffect, useState } from "react"
import { useGlobalContext } from "../../context/GlobalContext"
import { UserLog } from "../icons"
import { Button } from "@tremor/react"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [email, setEmail] = useState('')
  const { userData, setUserData } = useGlobalContext()
  const go = useNavigate()

  const handlerSession = () => {
    setUserData({})
    go('/')
  }
  useEffect(() => {
    setEmail(userData?.email)
  }, [userData])

  return (
    <>
      <header className="h-10 bg-gray-800 text-gray-200">
        <div className="px-1 sm:px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <h1>Logo</h1>
            <div>
              {userData.email ? (
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1">
                    <UserLog />
                    <h2>{email}</h2>
                  </div>
                  <Button
                    variant="light"
                    onClick={handlerSession}
                  >
                    Cerrar sesion</Button>
                </div>
              ) : <div></div>}

            </div>
          </div>
        </div>
      </header>
    </>
  )
}
