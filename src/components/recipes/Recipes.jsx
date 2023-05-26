import { Badge, Button, Card, Divider, Metric } from '@tremor/react';
import { capitalize } from '../../helpers/tools';
import { plus } from '../../icons';
export default function Recipes({
  _id,
  name,
  description,
  ingredients,
  imagePath,
}) {
  console.log(ingredients);
  return (
    <Card
      className="bg-white rounded-lg min-w-[300px]"
      decoration="bottom"
      decorationColor="gray"
    >
      <h2 className="mb-4 text-2xl ">{capitalize(name)}</h2>
      <div className="relative">
        <div className="min-h-[250px]">
          <img
            src={imagePath}
            alt={description}
            className="rounded-tr-lg rounded-tl-lg border-t-4 border-blue-400"
          />
        </div>
        {/* <span className="font-medium">{description}</span>
        <Divider />
        <ul className="min-h-[80px]">
          {ingredients.map((ingrediente) => (
            <Badge key={ingrediente} className="mr-1 my-1">
              {capitalize(ingrediente)}
            </Badge>
          ))}
        </ul> */}
        <div className="flex justify-end">
          <Button
            size="xs"
            variant="primary"
            icon={plus}
            onClick={() => console.log('clicked')}
          >
            Mas
          </Button>
        </div>
      </div>
    </Card>
  );
}
