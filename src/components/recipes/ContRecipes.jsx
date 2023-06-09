import Recipes from "./Recipes";


export default function ContRecipes({data}) {
  console.log(data,'---dataaa')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
      {data.map((recipe) => (
        <Recipes key={recipe._id} {...recipe} />
      ))}
    </div>
  )
}
