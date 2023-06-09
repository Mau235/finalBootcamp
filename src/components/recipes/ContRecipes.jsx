import Recipes from "./Recipes";

export default function ContRecipes({data}) {
  return (
    <div className="flex flex-row w-1/3 justify-center lg:grid-cols-3 gap-11">
      {data.map((recipe) => (
        <Recipes key={recipe._id} {...recipe} />
      ))}
    </div>
  )
}
