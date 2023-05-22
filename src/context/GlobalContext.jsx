
import { useContext, createContext } from "react";

const DataContext = createContext()

export const GlobalContext = ({ childre }) => {
  return (
    <DataContext.Provider value={{}}>
      {childre}
    </DataContext.Provider>
  )
}

export const useGrobalContext = () => useContext(DataContext)