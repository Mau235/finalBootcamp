import { useEffect, useState } from "react";
import ContAllDataToWall from "../components/recipes/ContAllDataToWall";
import ContSpinner from "../components/spinner/ContSpinner";
import { BODY_CONTAINER, BORDER_BLACK } from "../constant/myConstant";
import { useGlobalContext } from "../context/GlobalContext";

export default function FavoritePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { getFavorite } = useGlobalContext()

  useEffect(() => {
    setData(getFavorite())
    setLoading(false)
  }, [])


  return (
    <>
      <div className={BODY_CONTAINER}>
        <div className={`${BORDER_BLACK} p-6 mb-6`}>
          <h1 className="text-3xl font-semibold text-center">Tus recetas</h1>
        </div>
        {loading ? (
          <ContSpinner />
        ) : (
          <ContAllDataToWall data={data} look={!loading} />
        )}
      </div>
    </>
  )
}
