
import { useContext, createContext } from "react";

const DataContext = createContext()

export const GlobalContext = ({ children }) => {
  const [userData, setUserData] = useState({})
  return (
    <DataContext.Provider 
      value={{
        setUserData
      }}
      >
      {children}
    </DataContext.Provider>
  )
}

export const useGrobalContext = () => useContext(DataContext)