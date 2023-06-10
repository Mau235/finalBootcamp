import Recipes from "./Recipes";

export default function ContRecipes({data}) {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-11">
      {data.map((recipe) => (
        <Recipes key={recipe._id} {...recipe} />
      ))}
    </div>
  )
}
