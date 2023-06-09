import { Button, Card } from '@tremor/react';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../helpers/tools';
import { plus } from '../icons';
import st from '../../style/recipes.module.css'

export default function Recipes({
  _id,
  name,
  description,
  imagePath,
}) {
  const go = useNavigate()

  const handlerPlus = () => {
    go(`/wall/receta/${_id}`)
  }

  return (
    <Card
      className="bg-white rounded-lg min-w-[300px]"
      decoration="top"
      decorationColor="gray"
    >
      <h2 className="mb-4 text-2xl">{capitalize(name)}</h2>
      <div className={st.target}>
        <img
          src={imagePath}
          alt={description}
          className="rounded-lg border-y-4 border-blue-400"
        />
        <div className={st.greyOpacity}>
          <Button
            size="xs"
            variant="primary"
            onClick={handlerPlus}
            className={`px-8 py-2 ${st.buttom}`}
          >
            Leer Receta
          </Button>
        </div>
      </div>
    </Card>
  );
}
