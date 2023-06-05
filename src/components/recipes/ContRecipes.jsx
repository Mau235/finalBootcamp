import Recipes from "./Recipes";


export default function ContRecipes({dataAll}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 ">
      {dataAll.map((recipe) => (
        <Recipes key={recipe.id} {...recipe} />
      ))}
    </div>
  )
}
