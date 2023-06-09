import { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext()

export const GlobalContext = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [idToken, setIdToken] = useState(null)
  const [allRecipe, setAllRecipe] = useState([])
  const [modalLook, setModalLook] = useState(false)
  
  useEffect(() => {
    setIdToken(userData.idToken)
  }, [userData.email])

  const getOneRecipe = (id) => {
    return allRecipe.find(recipe => recipe._id === id)
  }
  
  return (
    <DataContext.Provider
      value={{
        setUserData,
        userData,
        idToken,
        setAllRecipe,
        getOneRecipe,
        modalLook
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(DataContext)
}