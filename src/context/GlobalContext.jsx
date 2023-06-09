import { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext()

export const GlobalContext = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [allRecipe, setAllRecipe] = useState([])
 
  const getOneRecipe = (id) => {
    return allRecipe.find(recipe => recipe._id === id)
  }
  
  return (
    <DataContext.Provider
      value={{
        setUserData,
        userData,
        setAllRecipe,
        getOneRecipe
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(DataContext)
}