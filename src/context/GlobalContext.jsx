import { useContext, createContext, useState } from "react";

const DataContext = createContext()

export const GlobalContext = ({ children }) => {
  const [userData, setUserData] = useState()
  
  const logIn = (data) => {
    setUserData(data)
  }

  return (
    <DataContext.Provider
      value={{
        setUserData,
        userData,
        logIn
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(DataContext)
}