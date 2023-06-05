import { BODY_CONTAINER } from '../constant/myConstant';
import { useEffect, useState } from 'react';
import { getWall } from '../fetch/featchWall';
import { useGlobalContext } from '../context/GlobalContext';
import NoRecipes from '../components/recipes/NoRecipes';
import ContRecipes from '../components/recipes/ContRecipes';
import { dataMy } from '../data';

export default function Wall() {
  const { userData } = useGlobalContext()
  const [data, setData] = useState([])
  const [look, setLook] = useState(true)

  const handlerStart = () => {
    setData(getWall(userData.idToken))

  /*   if (data.length === 0) {
      setLook(false)
    } else {
      setLook(true)
    } */
  }
  useEffect(() => {
    handlerStart()
  }, [])



  return (
    <div className={BODY_CONTAINER}>
      <div className='rounded-lg border-2 border-black bg-white p-6 mb-6'>
        <h1 className='text-3xl font-semibold text-center'>Tus recetas</h1>
      </div>
      {look ? (
        <ContRecipes dataAll={dataMy} />
      ) : (
        <NoRecipes />
      )}
    </div>
  );
}
