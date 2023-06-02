import { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext()

export const GlobalContext = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [idToken, setIdToken] = useState(null)

  useEffect(() => {
    setIdToken(userData.idToken)
  }, [userData.email])
  
  return (
    <DataContext.Provider
      value={{
        setUserData,
        userData,
        idToken
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(DataContext)
}