import { useEffect, useState } from "react"
import { useGlobalContext } from "../../context/GlobalContext"

export default function Header() {
  const [email, setEmail] = useState('')
  const { userData } = useGlobalContext()

  useEffect(() => {
    setEmail(userData)
    console.log(userData,'---userData')
  }, [userData])

  return (
    <>
      <header className="h-10 bg-gray-800 text-gray-200">
        <div className="px-1 sm:px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <h1>Logo</h1>
            <h2>{email}</h2>
          </div>
        </div>
      </header>
    </>
  )
}
