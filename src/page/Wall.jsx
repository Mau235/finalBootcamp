// eslint-disable-next-line no-unused-vars

import { BODY_CONTAINER } from '../constant/myConstant';
import { data } from '../data.js';
import Recipes from '../components/recipes/Recipes';

export default function Wall() {
  return (
    <div className={`${BODY_CONTAINER} pt-6`}>
      <div className='rounded-lg border-2 border-black bg-white p-6 mb-6'>
        <h1 className='text-3xl font-semibold'>Recetas </h1>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11  ">
        {data.map((recipe) => (
          <Recipes key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
