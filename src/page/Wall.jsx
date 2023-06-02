
import { BODY_CONTAINER } from '../constant/myConstant';
import { dataMy }  from '../data.js';
import Recipes from '../components/recipes/Recipes';
import { useEffect, useState } from 'react';
import { getWall } from '../fetch/featchWall';
import { useGlobalContext } from '../context/GlobalContext';

export default function Wall() {
  const { userData } = useGlobalContext()
  const [data, setData] = useState([])

  const handlerStart = () => {
    setData(getWall(userData.idToken))
  }
  useEffect(() => {
    handlerStart()
  }, [])



  return (
    <div className={BODY_CONTAINER}>
      <div className='rounded-lg border-2 border-black bg-white p-6 mb-6'>
        <h1 className='text-3xl font-semibold'>Recetas</h1>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 ">
         {dataMy.map((recipe) => (
          <Recipes key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
