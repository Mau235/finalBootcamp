import { useContext, createContext, useState } from "react";
import { LOCAL_FAVORITE } from "../constant/myConstant";

export const DataContext = createContext()

export const GlobalContext = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [allRecipe, setAllRecipe] = useState([])
  const [favorite, setFavorite] = useState([])
  const [buyProduct, setBuyProduct] = useState([])

  const getOneRecipe = (id) => {
    return allRecipe.find(recipe => recipe._id === id)
  }

  const getFavorite = () => {
    const local = JSON.parse(localStorage.getItem(LOCAL_FAVORITE));

    for (let i = 0; i < allRecipe.length; i++) {
      const obj = local.find(loc => loc === allRecipe[i]._id)
      setFavorite([
        ...favorite,
        obj
      ])
    }

    return favorite
  }

  const addBuyProduct = (recip) => {
    setBuyProduct([
      ...buyProduct,
      recip
    ])
  }

  return (
    <DataContext.Provider
      value={{
        setUserData,
        userData,
        setAllRecipe,
        getOneRecipe,
        getFavorite,
        addBuyProduct,
        buyProduct
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(DataContext)
}