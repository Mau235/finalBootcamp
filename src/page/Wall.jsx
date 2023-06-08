import { BODY_CONTAINER } from '../constant/myConstant';
import { useEffect, useState } from 'react';
import { getWall } from '../fetch/featchWall';
import { useGlobalContext } from '../context/GlobalContext';
import NoRecipes from '../components/recipes/NoRecipes';
import ContRecipes from '../components/recipes/ContRecipes';

export default function Wall() {
  const { userData, setAllRecipe } = useGlobalContext()
  const [data, setData] = useState([])
  const [look, setLook] = useState(false)

  const handlerStart = async () => {
    const res = await getWall(userData.idToken)
    setData(res)
    setAllRecipe(res)
    if (res.length === 0) {
      setLook(false)
    } else {
      setLook(true)
    }
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
        <ContRecipes dataAll={data} />
      ) : (
        <NoRecipes />
      )}
    </div>
  );
}
